import React from "react";
import Image from "next/image";
import { BiHeart } from "react-icons/bi";
// Define props type
type Props = {
  article: {
    id: number;
    userImage: string;
    username: string;
    reaction: number;
    coverImage: string;
    title: string;
  };
};
const ArticleCard = ({ article }: Props) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      {/* cover image */}
      <Image
        src={`${article.coverImage}`}
        alt={article.title}
        width={300}
        height={300}
        className="w-full h-full"
      />
      <div className="p-5">
        {/* author and reactor */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src={article.userImage}
              alt={article.username}
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-base text-black text-opacity-70">
              {article.username}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <BiHeart className="text-red-600" />
            <p className="text-sm text-gray-800">{article.reaction}</p>
          </div>
        </div>
        {/* Heading */}
        <h1 className="mt-4 mb-4 text-lx font-semibold">{article.title}</h1>
        <p className="text-base text-gray-700 text-sm">Lorem ipsum dolor sit amet conwqqrqrvr ds af pdof iadni nand fado fand</p>
        <button className="mt-4 mb-3 hover:text-green-600 text-lg text-black font-bold underline">Learn More</button>
      </div>
    </div>
  );
};

export default ArticleCard;
