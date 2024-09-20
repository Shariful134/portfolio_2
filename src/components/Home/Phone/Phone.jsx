import { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard/PhoneCard";

const Phone = () => {
  const [Phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("Phones.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);
  return (
    <div className="bg-background">
      <div className="container mx-auto pb-56">
        <div className="text-white max-w-md text-center mx-auto pb-28">
          <h4 className="text-3xl text-indigo-300 pt-5">Services</h4>
          <h2 className="text-4xl pt-5 pb-5">Our Service Area</h2>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {Phones.map((Phone) => (
            <PhoneCard Phone={Phone}></PhoneCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Phone;
