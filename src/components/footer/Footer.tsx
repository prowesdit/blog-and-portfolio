"use client";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";
import fbIcon from "../../../public/facebook-icon.svg";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  console.log("Hello from ssr");
  return (
    <div className={styles.container}>
      <div>©️2024 DayDreamers. All rights reserved.</div>
      <div className="flex gap-4 items-center">
        <Image src="/facebook-logo.svg" alt="fb-icon" width={20} height={20} />
        <Image src="/linkedin-logo.svg" alt="fb-icon" width={20} height={20} />
        <Image src="/instagram-logo.svg" alt="fb-icon" width={20} height={20} />
        <Image src="/whatsapp-logo.svg" alt="fb-icon" width={20} height={20} />
      </div>
    </div>
  );
};

export default Footer;
