import Button from "@/components/primary-button/Button";
import React from "react";
import catImg1 from "../../../../public/8.png";
import catImg2 from "../../../../public/9.jpg";
import catImg3 from "../../../../public/10.png";

import Image from "next/image";
import styles from "./page.module.css";

const Category = ({ params }: { params: any }) => {
  return (
    <>
      <div>
        <h1 className="capitalize text-3xl font-semibold text-green-400 my-4 text-center">
          {params.category}
        </h1>
        <div
          className={`flex flex-col md:flex-row gap-10 mt-24 mb-18 items-center ${styles.item}`}
        >
          <div className="flex-1 flex flex-col justify-center gap-10">
            <h1 className="text-3xl font-semibold">
              Social Welfare Illustration
            </h1>
            <p className="text-lg">
              Showcasing a serene social welfare illustration with minimal
              characters, eco-friendly housing, lush greenery, and warm
              sunlight, emphasizing unity, tranquility, and sustainable living
              in a harmonious community.
            </p>
            <Button name={"See more"} url={"#"} />
          </div>
          <div className="flex-1">
            <Image
              src={catImg1}
              alt="category image"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row gap-10 mt-14 mb-8 items-center ${styles.item}`}
        >
          <div className="flex-1 flex flex-col justify-center gap-10">
            <h1 className="text-3xl font-semibold">Abstract Illustration</h1>
            <p className="text-lg">
              This abstract illustration features swirling patterns of vibrant
              red, green, and white hues blending seamlessly with darker tones,
              resembling natural formations or fluid art on a deep green
              backdrop.
            </p>
            <Button name={"See more"} url={"#"} />
          </div>
          <div className="flex-1">
            <Image
              src={catImg2}
              alt="category image"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row gap-10 mt-14 mb-8 items-center ${styles.item}`}
        >
          <div className="flex-1 flex flex-col justify-center gap-10">
            <h1 className="text-3xl font-semibold">Portfolio Website Design</h1>
            <p className="text-lg">
              Dynamic portfolio website designed with the MERN stack, showcasing
              modern features, seamless user experience, responsive design, and
              efficient performance to highlight skills and projects
              professionally.
            </p>
            <Button name={"See more"} url={"#"} />
          </div>
          <div className="flex-1">
            <Image
              src={catImg3}
              alt="category image"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
