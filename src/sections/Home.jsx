import React from "react";

const Home = () => {
  return (
    <div className="mx-32 flex pt-20 h-screen">
      {/* left */}
      <div className="w-1/4 mr-10 items-center flex justify-center">
        <img
          src="/profile.jpg"
          alt="profile"
          className="w-96 grayscale p-1 hover:scale-105 border-2 rounded-md border-[#181818]"
        />
      </div>
      {/* right */}
      <div className="w-3/4 text-center justify-center flex flex-col gap-6 items-center">
        <h1 className="font-bold text-white text-6xl">Rifqi Firmansyah</h1>
        <p className="text-xl">Frontend Developer and Administrator</p>
      </div>
    </div>
  );
};

export default Home;
