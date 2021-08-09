import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  GlobeAltIcon
} from "@heroicons/react/solid";
const Header = () => {
  return (
    <header
      className="bg-white sticky min-w-full top-0 z-50 
    grid grid-cols-3 shadow-md lg:shadow-lg p-5 lg:py-3.5 md:px-10"
    >
      {/* left */}
      <div className="relative flex items-center h-8 cursor-pointer my-auto
      transition duration-200 animate-bounce ">
        <Image
          className="filter saturate-200 "
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* middle -Search */}

      <div
        className="flex items-center md:border-2 rounded-full py-2
        md:shadow-sm lg:shadow-md 2xl:shadow-lg"
      >
        <input
          className="flex-grow pl-5 bg-transparent 
          outline-none text-sm text-gray-900 placeholder-black
          "
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon
          className="hidden md:inline-flex h-8 bg-red-500
        text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* right */}

    <div className='flex items-center justify-end text-gray-600 space-x-4'>
        <p className='hidden md:inline'>Become a host</p>
        <GlobeAltIcon className='h-6 ransition duration-200 animate-spin '/>
        <div className="flex items-center space-x-2
        border-2 p-2 rounded-full lg:shadow-sm">
            <MenuIcon className='h-5'/>
            <UserCircleIcon className='h-6' />
        </div>
    </div>
    </header>
  );
};

export default Header;
