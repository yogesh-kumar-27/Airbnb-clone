import Head from "next/head";
import Banner from "../components/banner/Banner";
import Discovercard from "../components/card/Discovercard";
import Largecard from "../components/card/Largecard";
import Mediumcard from "../components/card/Mediumcard";
import Smallcard from "../components/card/Smallcard";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import data from "../data";

export default function Home({ exploreData, cardsData }) {
  console.log(exploreData);
  console.log(cardsData);
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-screen-2xl mx-auto px-8 p-10  m-5 shadow-xl sm:px-16 bg-white">
        <section className="pt-6 ">
          <h2
            className="text-2xl font-sans font-semibold
            pb-5"
          >
            Explore nearby
          </h2>
          {/* Pull the data from a server - API endpoints */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          xl:grid-cols-4  rounded-3xl"
          >
            {exploreData?.map(({ img, location, distance }) => (
              <Smallcard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <Largecard
          img="https://links.papareact.com/4cj"
          title="Not sure where
         to go Perfect."
          buttonText="Get Inspired"
        />
        {/* Discovercard */}
        <section className="">
          <h2 className="font-semibold text-4xl py-8">Discover things to do</h2>
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-y-3 lg:space-x-4
          p-3"
          >
            {data.discover?.map(({ id, image, title, description }) => (
              <Discovercard
                key={id}
                image={image}
                title={title}
                description={description}
              />
            ))}
          </div>
        </section>
        {/* MediumCard */}
        <section className="">
          <h2 className="font-semibold text-4xl py-8">Live anywhere</h2>
          <div
            className="flex space-x-3 overflow-scroll scrollbar-hide
          p-3 -ml-3  rounded-3xl"
          >
            {cardsData?.map(({ img, title }) => (
              <Mediumcard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
        <Largecard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wish list curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://jsonkeeper.com/b/B9GN").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
