import Image from "next/image";
import { useEffect, useState } from "react";
import { baseUrl } from "../../constants/movie";
import { Movie } from "../../typings";
import { FaPlay } from "react-icons/fa";
import { InformationCircleIcon } from "@heroicons/react/solid";

interface Props {
  netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
  const [isMovie, setIsMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setIsMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);

  console.log(isMovie);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 h-[95vh] w-full -z-10">
        <Image
          alt="Banner image"
          src={`${baseUrl}${isMovie?.backdrop_path || isMovie?.poster_path}`}
          fill
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
        {isMovie?.title || isMovie?.name || isMovie?.original_name}
      </h1>
      <p className="max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-md">
        {isMovie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="banner-button bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" /> Play
        </button>
        <button className="banner-button bg-[gray]/70">
          More Info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
