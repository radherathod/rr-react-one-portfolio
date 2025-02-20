import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non
          risus in arcu efficitur sagittis. Nulla facilisi. Praesent fringilla,
          mauris eu tempus molestie, eros erat sagittis quam, vel vulputate
          ligula ligula sit amet erat. Suspendisse potenti.
        </p>
        <br />
        <p className="text-xl  text-gray-500">
          Curabitur auctor, dolor et suscipit pharetra, lectus mauris dictum
          ipsum, at tincidunt est justo non elit. Integer sodales lectus
          fermentum, suscipit libero in, gravida nisi. Proin dapibus enim nec
          felis vestibulum, nec ultrices nunc cursus.
        </p>
      </div>
    </div>
  );
};

export default About;
