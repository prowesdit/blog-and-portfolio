"use client";
import Image from "next/image";
import React from "react";
import person1 from "../../../../public/person1.jpg";
import socialMedia from "../../../../public/social-media.jpg";
import { notFound, useParams } from "next/navigation";
//import Error from "next/error";

async function getData(id: any) {
  // console.log();
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }: { params: any }) => {
  const { postId } = params;
  const postData = await getData(postId);

  return (
    <div>
      <div className="md:flex items-center justify-center gap-10 pb-10">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">{postData.title}</h1>
          {/* <p className="text-lg py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A id
            recusandae modi earum dolores soluta nisi perspiciatis, iste
            distinctio nemo consequuntur sed, et placeat qui? Enim temporibus
            quam velit sequi.
          </p> */}
          <p className="text-xl">{postData.body}</p>
          <div className="flex items-center gap-4">
            <Image
              src={person1}
              alt=""
              className="w-[60px] h-[60px] rounded-full"
            />
            <h3 className="text-lg font-semibold">John Doe</h3>
          </div>
        </div>
        <div className="flex-1">
          <Image
            src={socialMedia}
            alt=""
            className="w-full h-[240px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
