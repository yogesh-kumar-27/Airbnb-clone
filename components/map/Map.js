import { useState } from "react";
import ReactMapGL from "react-map-gl";
import { getCenter } from "geolib";
import { Marker, Popup } from "react-map-gl";
import Image from "next/image";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));
  //   console.log(coordinates)
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mahakal-27/cks8z2mbt919917q6gslqfp9v"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              area-lable="push-pin"
              className=" cursor-pointer animate-bounce"
            >
              📍
            </p>
          </Marker>
          {/* This is the popup that should show if we on a Marker */}

          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
              className=" shadow-lg z-50"
            >
              <div className="relative  h-52 w-auto rounded-md ">
                {result.title}
                <Image src={result.img} layout="fill" objectFit="cover" />
              </div>
              <div className="flex flex-col p-3">
                <h1
                  className="px-4 py-2 border rounded-md cursor-pointer
                      hover:shadow-lg active:scale-95 bg-[ffd5c2] active:bg-pink-400
                         transition duration-100 ease-out "
                >
                  {" "}
                  {result.title}
                </h1>
                <button
                  className="px-4 py-2 border rounded-full shadow-xl cursor-pointer
                      hover:shadow-2xl active:scale-9 bg-pink-400
                         transition duration-100 ease-out "
                >
                  Book Now
                </button>
                
              </div>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
