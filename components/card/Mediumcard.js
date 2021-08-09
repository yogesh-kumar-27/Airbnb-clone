import Image from "next/image"

const Mediumcard = ({img,title }) => {
    return (
       <div className='cursor-pointer hover:scale-105
       transform transition ease-out rounded-md shadow-md bg-white '>
            <div className='relative h-80 w-80 '>
            <Image
            src={img}
            layout='fill'
            />
        </div>
        <h2 className="text-1xl mt-3 text-center">{title}</h2>
       </div>
    )
}

export default Mediumcard
