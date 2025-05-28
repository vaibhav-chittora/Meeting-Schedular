import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRightIcon, Calendar, Clock, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: Calendar,
    title: "Create Events",
    description: "Easily set up and customize your event types",
  },
  {
    icon: Clock,
    title: "Manage Availability",
    description: "Define your availability to streamline scheduling",
  },
  {
    icon: LinkIcon,
    title: "Custom Links",
    description: "Share your personalized scheduling link",
  },
];

const howItWorks = [
  { step: "Sign Up", description: "Create your free Schedulrr account" },
  {
    step: "Set Availability",
    description: "Define when you're available for meetings",
  },
  {
    step: "Share Your Link",
    description: "Send your scheduling link to clients or colleagues",
  },
  {
    step: "Get Booked",
    description: "Receive confirmations for new appointments automatically",
  },
];

export default function Home() {
  return (
    <main className="container mx-auto py-16 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-24">
        <div className="lg:w-1/2">
          <h1 className="text-7xl font-extrabold pb-6 gradient-title">
            Simplify your meeting Schedules
          </h1>
          <p className="text-2xl text-gray-600 mb-10">
            Our app helps you to schedule meetings with your team members
            effectively. Create events, set your availability, and let others
            book the meeting slots seamlessly.
          </p>
          <Link href="/dashboard" className="btn btn-primary">
            <Button size="lg" className="text-lg">
              Get started <ArrowRightIcon size={18} className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          {/* poster */}
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/poster.png"
              alt="poster"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* key Features */}

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((features, index) => {
            return (
              <Card key={index}>
                <CardHeader>
                  <features.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                  <CardTitle className="text-center text-blue-600">
                    {features.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  <p>{features.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          What users say about us
        </h2>
        <Testimonials />
      </div>

      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          How it works?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-semibold text-gray-600 mb-2 text-lg">
                {step.step}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-500 text-white rounded-lg p-8 text-center ">
        <h2 className="text-3xl font-bold mb-4 ">
          Ready to simplify your Meeting schedules?
        </h2>
        <p className="text-xl mb-6">
          Get started with Schedulrr today and experience the ease of
          scheduling.
        </p>
        <Link href="/dashboard">
          <Button
            size="lg"
            variant="secondary"
            className="text-blue-600 cursor-pointer hover:bg-white hover:text-blue-700 hover:border-blue-400"
          >
            Schedule a Demo{" "}
            <ArrowRightIcon size={18} className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </main>
  );
}
