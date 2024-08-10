import { Button } from "@/components/ui/Button";
import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#F56551]">
          Découvrez votre prochaine aventure avec l'IA:
        </span>
        Des itinéraires personnalisés au bout des doigts
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Votre planificateur de voyage personnel, créant des itinéraires personnalisés adaptés à vos préfèrences et à votre budget.
      </p>
      <Link to={"/create-trip"}>
        <Button>Get Started, It's Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
