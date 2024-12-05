"use client";
import { url } from "inspector";
import Link from "next/link";
import { title } from "process";
import React from "react";
import styles from "./page.module.css";
import DarkModeToggle from "../DarkMode/DarkMode";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        DayDreamers
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {navItems.map((item) => (
          <Link key={item.id} href={item.url} className={styles.link}>
            {item.title}
          </Link>
        ))}
        <button
          onClick={() => {
            console.log("Logged out");
          }}
          className={styles.logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
