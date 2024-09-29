import { Link } from "react-router-dom";

const HeroPage1 = () => {
  return (
    <div
      id="page1"
      className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:items-end"
    >
      <h3 className="w-full px-5 py-5 text-4xl font-semibold leading-tight md:text-start md:w-1/2 md:text-8xl">
        Ultimate solutions for developers.
      </h3>
      <div className="flex flex-col items-center md:items-end md:w-1/3">
        <p className="w-full px-5 py-5 text-xl font-semibold leading-tight md:text-end md:text-2xl">
          Unite the developers around the world. With our tools and resources,
          you can elevate your projects and collaborate seamlessly.
        </p>
        <button className="px-5 py-2.5 mb-5 text-lg font-semibold text-white transition duration-300 ease-in-out rounded-lg shadow-lg mr-7 bg-sky-500 hover:bg-sky-600 hover:shadow-xl">
          <Link to={"docs"}>Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default HeroPage1;
