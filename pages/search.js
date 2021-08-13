import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import Head from "next/head";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Infocard from "../components/card/Infocard";
import Map from "../components/map/Map";

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formatedStartDate = format(new Date(startDate), "dd MMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMM yy");

  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div>
      <Head>
        <title>Airbnb: {location} </title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header
        placeholder={` ${location} | ${formatedStartDate} - ${formatedEndDate} | ${noOfGuests} guests`}
        className="bg-white"
      />

      <main className="flex">
        <section className="flex-grow pt-36 px-6">
          <p className="text-sm lg:text-2xl ">
            300+ Stays - <span className="font-bold button bg-white text-lg rounded-md">{range}</span>- for{" "}
            {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-norap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResults.map(
              ({
                img,
                location,
                title,
                description,
                star,
                price,
                total,
                long,
                lat,
              }) => (
                <Infocard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>

        <section  className="hidden xl:inline-flex xl:min-w-[600px] mt-36">
          <Map searchResults={searchResults}/>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://jsonkeeper.com/b/IAGU").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResults,
    },
  };
}
