"use server";

import { prisma } from "@/lib/prisma";
import { auth, clerkClient } from "@clerk/nextjs/server";

export const updateUsername = async (username) => {
  try {
    const { userId } = auth();
    if (!userId) {
      throw new Error("Unauthorized User");
    }

    const existingUsername = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (existingUsername && existingUsername.id !== userId) {
      throw new Error("Username already exists");
    }
    const updatedUsername = await prisma.user.update({
      where: {
        clerkUserId: userId,
      },
      data: {
        username: username,
      },
    });

    await clerkClient.users.updateUser(userId, {
      username: username,
    });

    return { success: true };
  } catch (error) {
    console.log("Error in updating username:", error);
    throw error;
  }
};
