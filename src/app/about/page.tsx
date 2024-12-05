import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import aboutImg from "../../../public/about.jpg";
import Button from "@/components/primary-button/Button";
const About = () => {
  return (
    <>
      <div className="">
        <div className="w-full relative">
          <Image
            src={aboutImg}
            alt="meeting image"
            className="object-cover grayscale h-[20rem]"
          />
          <div className="md:absolute md:bottom-[20px] md:left-[20px] bg-green-400 p-2 text-white backdrop-blur-md rounded-lg">
            <h1 className="font-bold text-xl text-white">
              Digital StroyTeller
            </h1>
            <h2 className="text-lg font-semibold">
              Handcrafting award wining digital experiences
            </h2>
          </div>
        </div>
        <div className="my-10 flex flex-col md:flex-row gap-10">
          <div className="">
            <h1 className="font-bold text-2xl">Who are we ?</h1>
            <p className="text-base py-3">
              We use digital tools like videos, social media, podcasts, and
              interactive media to craft and share engaging narratives.
              <br />
              <br />
              We blend text, visuals, sound, and technology to create immersive
              experiences, often leveraging platforms like YouTube, Instagram,
              or blogs to reach diverse audiences and connect through
              compelling, multimedia storytelling.
              <br /> <br />A digital storyteller combines creativity and
              technology to create engaging narratives.
            </p>
          </div>

          <div className="">
            <h1 className="font-bold text-2xl">What do we do?</h1>
            <p className="text-base py-3">
              We, the digital storyteller, crafts narratives using digital
              platforms and multimedia tools. Our tasks include: Creating
              Content, Editing Media, Engaging Audiences, Adapting to Trends,
              Brand Narratives, Interactive Elements
              <br />
              <br />
              We do these by producing videos, blogs, podcasts to tell a story
              combining text, images, audio, and video for cohesive
              storytelling.
              <br /> <br />
              We connect with audiences by weaving relatable, memorable, and
              impactful narratives digitally.
            </p>
            <Button url="contact" name="Contact Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
