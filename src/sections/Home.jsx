import React from "react";

const Home = () => {
  return (
    <div>
      {/* left */}
      <div className="w-1/2 mx-auto flex py-20">
        <img
          src="/profile.jpg"
          alt="profile"
          className="h-96 grayscale border-4 rounded-md border-[#181818]"
        />
      </div>
      {/* right */}
      <div></div>
    </div>
  );
};

export default Home;
