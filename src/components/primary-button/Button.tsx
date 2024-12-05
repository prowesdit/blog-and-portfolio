import Link from "next/link";
import React from "react";

const Button = ({ url, name }: { url: any; name: any }) => {
  return (
    <Link href={url}>
      <button className="bg-green-600 hover:bg-green-700 text-xl w-fit px-6 py-3 rounded-lg text-white ">
        {name}
      </button>
    </Link>
  );
};

export default Button;
