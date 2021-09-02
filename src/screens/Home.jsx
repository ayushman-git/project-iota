import React, { useState } from "react";
import wave from "../assets/svg/wave.svg";
import Modal from "../components/Modal";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const joinModalToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <section className="w-1/3 flex flex-col items-center justify-center mb-20">
        <h1 className="font-extrabold text-4xl mb-10 text-gray-300">
          λ Lambda
        </h1>
        <button
          className="w-full bg-blue-700 px-2 py-4 font-bold rounded-2xl"
          onClick={joinModalToggle}
        >
          Join
        </button>
        <button className="w-full border-2 border-blue-700 px-2 py-4 mt-4 font-bold rounded-2xl text-gray-300">
          Host
        </button>
      </section>
      <img className="absolute bottom-0" src={wave} alt="" />
      {isVisible && <Modal closeHandler={setIsVisible} />}
    </div>
  );
}

export default Home;
