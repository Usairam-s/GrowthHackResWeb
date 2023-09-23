import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <div className="bg-[#2699fb] w-full mx-auto  md:h-[300px] py-[20px] h-screen items-center">
      <div className=" max-w-[1240px] mx-auto h-[270px] md:flex justify-between">
        <div className=" text-center p-4 flex flex-col justify-evenly ">
          <h1 className="text-3xl font-bold">Growth Hack</h1>
          <p className="text-white font-medium">
            We are one who provide you quality education to rapidly <br />
            grow in this techish era!
          </p>
          <div className="space-x-2">
            <SocialIcon url="www.github.com" />
            <SocialIcon url="www.facebook.com" />
            <SocialIcon url="www.instagram.com" />
            <SocialIcon url="www.linkdeln.com" />
          </div>
        </div>

        <div className=" py-[15px] px-[25px] flex flex-col justify-evenly text-white ">
          <h1 className="font-bold mb-2 text-black">Solution</h1>
          <h2>Analytics</h2>
          <h2>Marketing</h2>
          <h2>Commerce</h2>
          <h2>Insights</h2>
        </div>

        <div className=" py-[15px] px-[25px] flex flex-col justify-evenly text-white ">
          <h1 className="font-bold mb-2 text-black">Support</h1>
          <h2>Pricing</h2>
          <h2>Documentation</h2>
          <h2>Guide</h2>
          <h2>API Status</h2>
        </div>

        <div className=" py-[15px] px-[25px] flex flex-col justify-evenly text-white ">
          <h1 className="font-bold mb-2 text-black">Company</h1>
          <h2>About</h2>
          <h2>Jobs</h2>
          <h2>Blogs</h2>
          <h2>Press</h2>
        </div>
      </div>
    </div>
  );
}
