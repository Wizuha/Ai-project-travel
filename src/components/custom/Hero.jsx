import { Button } from "@/components/ui/Button";
import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#F56551]">Discover your next AI adventure: </span>
        Personalised Itineraries at Your Fingertips
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Your personal travel planner, creating customised itineraries to suit
        your preferences and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started, It's Free</Button>
      </Link>
      <img src='/landing.png' className="-mt-25" />
    </div>
  );
}

export default Hero;
