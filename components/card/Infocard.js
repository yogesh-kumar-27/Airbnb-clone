import Image from "next/image"
import { HeartIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import FlipMove from 'react-flip-move'

const Infocard = ({img,location,title,description,star,price,total,long,lat}) => {
    return (
        <FlipMove className="flex flex-col md:flex-row py-7 px-2 border-b cursor-pointer hover:shadow-lg transition duration-200 ease-out first:border-t">
        <div className="relative h-32 w-[100%] md:h-52 md:w-80 flex-shrink-0">
          <Image
            className="rounded-2xl"
            src={img}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col flex-grow pt-2 md:pt-0 md:pl-5">
          <div className="flex justify-between">
            <p>{location}</p>
            <HeartIcon className="h-7 cursor-pointer text-black " />
          </div>
          <h4 className="text-xl">{title}</h4>
          <div className="border-b w-10 pt-2" />
          <p className="pt-2 text-sm text-gray-500 flex-grow ">{description}</p>
          <div className="flex justify-between items-end">
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400" /> {star}
            </p>
            <div>
              <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
              <p className="text-right font-extralight">{total}</p>
              <button className='px-4 py-2 border rounded-full shadow-xl cursor-pointer
                      hover:shadow-2xl active:scale-9 bg-pink-400 hover:bg-pink-500
                         transition duration-100 ease-out '>Book Now</button>
            </div>
          </div>
        </div>
      </FlipMove>
    )
}
  
export default Infocard
