import data from '../../data'
const Discovercard = ({ image, title, description }) => {
    console.log(data.discover)
    return (
        <div className='cursor-pointer hover:scale-105
        transform transition ease-out rounded bg-white shadow-sm 
        dark:text-[#F8F5F1] dark:bg-[#0F1123] dark:hover:bg-[#0A1931]'>

          <div className="relative">
          <img
            className="lg:h-[500px] object-fill 
            filter saturate-100 h-90 w-full"
                src={image}
            />
          </div>
            <h2 className="text-1xl mt-3 mx-3">{title}</h2>
            <p className="text-gray-600  mx-3">{description}</p>
        </div>


    )
}

export default Discovercard
