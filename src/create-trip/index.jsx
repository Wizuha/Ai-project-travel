import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";

import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SelectBudgetOptions, SelectTravelesList } from "../constants/options";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

  const handleInputChange=(name,value)=>{
    setFormData({
        ...formData,
        [name]:value
    })
  }

  useEffect(() => {
    console.log(formData);
  },[formData])

  const OnGenerateTrip=()=>{
    if(formData?.numberDays>5){
        return;
    }
    console.log(formData);
  }

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Faites nous part de vos préfèrences de voyages 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Il vous suffit de fournir quelques informations de base et notre
        planificateur de voyage vous proposera un itinéraire personnalisé en
        fonction de vos préférences.
      </p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">
            Quel est la destination de votre choix ?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          ></GooglePlacesAutocomplete>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            Combien de jour dure votre séjour ?
          </h2>
          <Input
            placeholder={"Ex.3"}
            type={"number"}
            onChange={(e) => handleInputChange("numberDays", e.target.value)}
          />
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">Quel est votre budget ?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow
                ${formData?.budget == item.title && "shadow-lg border-black"}
                `}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            Combien de personne vont voyager ?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("traveler", item.people)}
                className={`p-4 border cursor-pointer rounded-lg hover:shadow 
                ${formData?.traveler == item.people && "shadow-lg border-black"}`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-10 justify-end flex">
        <Button onClick={OnGenerateTrip} >Générer un voyage</Button>
      </div>
    </div>
  );
}

export default CreateTrip;
