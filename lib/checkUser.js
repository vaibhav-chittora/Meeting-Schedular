import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();

  //check if user is logged in
  if (!user) {
    return null;
  }

  try {
    // check if user is already in the database
    const loggedInUser = await prisma?.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    if (loggedInUser) {
      return loggedInUser;
    }
    //if user is not in the database, create a new user

    const name = `${user.firstName} ${user.lastName}`;
    await clerkClient().users.updateUser(user.id, {
      username: name.split(" ").join("-") + user.id.slice(-4),
    });

    //create the new user in the database
    const newUser = await prisma?.user.create({
      data: {
        clerkUserId: user.id,
        name,
        email: user.emailAddresses[0].emailAddress,
        username: name.split(" ").join("-") + user.id.slice(-4),
        imageUrl: user.imageUrl,
      },
    });
    return newUser;
  } catch (error) {
    console.log("Error in checkUser: ", error);
    return null;
  }
};
