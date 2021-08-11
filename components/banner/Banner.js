import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[300px] sm:[400px] lg:h-[500px]  
      xl:h-[600px] 2xl:h-[700px]  "
    >
      <img
        className="h-[300px] sm:[400px] lg:h-[700px] w-full "
        src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3408744.jpg&fm=jpg"
        layout="fill"
        objectFit="cover"
      />
      <div
        className="absolute w-full text-center
       px-3  top-1/2 z-30 "
      >
        <p className="text-white font-bold text-2xl lg:text-7xl ">
          Olympian & ParaLympian Online Experiences
        </p>
        <button
          className="p-2 text-sm my-2 bg-white rounded shadow-md 
          hover:shadow-xl active:scale-90 transition-all duration-150
           hover:animate-bounce ease-in-out"
        >
          Explore now
        </button>
      </div>
    </div>
  );
};

export default Banner;
