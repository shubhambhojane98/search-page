import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Clock4, MessageCircleMore } from "lucide-react";

interface Blog {
  title: string;
  description: string;
  image: string;
  category: string;
  posted: string;
  comments: string;
}

const BCard = ({
  title,
  description,
  image,
  category,
  posted,
  comments,
}: Blog) => {
  return (
    <Card className="mb-2 flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
      <Image
        src={image}
        alt="img"
        width={350}
        height={200}
        className="object-cover h-60 w-full"
      />

      <div className="mt-2 ml-5">
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
            category === "Technology"
              ? "bg-blue-100 text-blue-800"
              : category === "Healthcare"
              ? "bg-green-100 text-green-800"
              : category === "Entertainment"
              ? "bg-red-100 text-red-800"
              : category === "Nutrition"
              ? "bg-orange-100 text-orange-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {category}
        </span>
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Clock4 className="mr-1" />
            <p>{posted} ago</p>
          </div>
          <div className="flex items-center">
            <MessageCircleMore className="mr-1" />
            <p>{comments} comments</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BCard;
