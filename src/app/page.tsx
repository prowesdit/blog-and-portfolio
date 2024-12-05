import Image from "next/image";
import heroImg from "../../public/2.png";
import styles from "./page.module.css";
import Button from "@/components/primary-button/Button";

export default function Home() {
  return (
    <>
      <div className="md:flex  items-center gap-12 py-10">
        <div className="flex flex-col gap-10 lg:gap-20 md:w-1/2">
          <h1
            className={`text-3xl md:text-5xl lg:text-7xl font-semibold bg-gradient-to-b from-green-400 to-gray-50 bg-clip-text text-transparent `}
          >
            Ambition fuels vision, opens thousand doors
          </h1>
          <p className="text-2xl font-semibold">
            Passion fuels perseverance; dreams inspire purpose and meaningful
            action.
          </p>
          <Button url="/portfolio" name="See Our Works" />
        </div>
        <div className="md:w-1/2">
          <Image
            src={heroImg}
            alt="hero-image"
            className={`w-full h-full object-contain ${styles.heroImage}`}
          />
        </div>
      </div>
    </>
  );
}
