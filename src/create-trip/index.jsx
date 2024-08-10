import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  const [place, setPlace] = useState();
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Faites nous part de vos préfèrences de voyages
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Il vous suffit de fournir quelques informations de base et notre
        planificateur de voyage vous proposera un itinéraire personnalisé en
        fonction de vos préférences.
      </p>

      <div className="mt-20">
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
                console.log(v);
              },
            }}
          ></GooglePlacesAutocomplete>
        </div>
        <div>
          <h2 className="text-xl my-3 font-medium">
            Combien de jour dure votre séjour ?
          </h2>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
