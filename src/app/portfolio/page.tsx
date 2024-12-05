import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import bg1 from "../../../public/4.png";
import bg2 from "../../../public/6.png";
import bg3 from "../../../public/7.png";

const Portfolio = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-3  gap-12 justify-center my-12">
          <Link
            href={"/portfolio/illustrations"}
            style={{ backgroundImage: `url(${bg1.src})` }}
            className={`!bg-cover bg- bg-no-repeat border border-4 border-solid border-gray-100 rounded-lg w-[300px] h-[400px] relative shadow-lg shadow-gray-600`}
          >
            <span className=" text-4xl text-green-700 hover:text-gray-100 font-bold absolute right-[10px] bottom-[10px]">
              Illustrations
            </span>
          </Link>
          <Link
            href={"/portfolio/websites"}
            style={{ backgroundImage: `url(${bg2.src})` }}
            className={` !bg-cover bg-no-repeat border border-4 border-solid border-gray-100 rounded-lg  w-[300px] h-[400px] relative shadow-lg shadow-gray-600`}
          >
            <span className="text-4xl text-green-700 hover:text-gray-100 font-bold absolute right-[10px] bottom-[10px]">
              Websites
            </span>
          </Link>
          <Link
            href={"/portfolio/application"}
            style={{ backgroundImage: `url(${bg3.src})` }}
            className={`!bg-cover bg-no-repeat border border-4 border-solid border-gray-100 rounded-lg w-[300px] h-[400px] relative shadow-lg shadow-gray-600`}
          >
            <span className="text-4xl text-green-700 hover:text-gray-100 font-bold  absolute right-[10px] bottom-[10px]">
              Application
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
