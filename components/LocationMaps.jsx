import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import markerRed from "../assets/marker/285659_marker_map_icon.png";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Leaflet from "leaflet";

const text = [
  {
    country: "Canada",
    address: {
      officeName: "Designo Central Office",
      streetName: "3886 Wellington Street",
      city: "Toronto, Ontario M9C 3J5",
    },

    contact: {
      phoneNumber: "P : +1 253-863-8967",
      email: "M : contact@designo.co",
    },
    id: 0,
    latLong: { lat: 43.644009, long: -79.394539 },
  },
  {
    country: "Australia",
    address: {
      officeName: "Designo AU Office",
      streetName: "19 Balonne Street",
      city: "New South Wales 2443",
    },

    contact: {
      phoneNumber: "P : (02) 6720 9092",
      email: "M : contact@designo.au",
    },
    id: 1,
    latLong: { lat: -30.329531, long: 149.788193 },
  },
  {
    country: "United Kingdom",
    address: {
      officeName: "Designo UK Office",
      streetName: "13  Colorado Way",
      city: "Rhyd-y-fro SA8 9GA",
    },

    contact: {
      phoneNumber: "P : 078 3115 1400",
      email: "M : contact@designo.uk",
    },
    id: 2,
    latLong: { lat: 40.514278, long: -107.547401 },
  },
];
function LocationMaps() {
  return (
    <div>
      {text.map(({ country, address, contact, id, latLong }) => (
        <Location
          country={country}
          address={address}
          contact={contact}
          key={id}
          latLong={latLong}
          id={id}
        />
      ))}
    </div>
  );
}

function Location({ country, address, contact, latLong, id }) {
  const [render, setRender] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (render) setRender(false);

    const marker = ref.current;
    marker?.openPopup();
  }, [render]);
  return (
    <div className="flex flex-col  max-md:h-[714px] md:h-[683px] lg:h-80 w-full  rounded-2xl md:grid md:grid-rows-2  lg:grid-flow-row-dense md:gap-8 max-md:mb-10 lg:mb-8 md:mb-[120px] lg:gap-9  lg:grid-rows-1 lg:grid-cols-3 overflow-hidden    transition-all ease-in-out duration-300">
      <div
        id="map"
        className={`max-md:h-[320px] w-full md:rounded-2xl z-10
        }  overflow-hidden   ${id !== 1 ? "odd:lg:col-start-3" : ""} `}
      >
        <MapContainer center={[latLong.lat, latLong.long]} zoom={16} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker
            icon={
              new Leaflet.Icon({
                iconUrl: markerRed,
                iconAnchor: [18, 68],
                popupAnchor: [10, -44],
                iconSize: [55, 55],
              })
            }
            ref={ref}
            position={[latLong.lat, latLong.long]}
          >
            <Popup closeButton={false} autoPan={false} closeOnClick={false} autoClose={false}>
              {address.officeName}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div
        className={`flex flex-col md:flex-row max-md:h-[394px] md:justify-evenly md:items-center lg:flex-row lg:h-full  bg-tan  w-full text-darkGray md:rounded-2xl overflow-hidden ${
          id !== 1 ? " lg:col-start-1 lg:col-end-3" : "lg:col-span-2"
        } text-center justify-center items-center `}
      >
        <div className="flex flex-col md:h-40 justify-end max-md:mb-6 ">
          <h1 className="text-[32px] font-medium lg:text-5xl  text-peach mb-6">{country}</h1>

          <h2 className=" font-bold ">{address.officeName}</h2>
          <p>{address.streetName}</p>
          <p className="">{address.city}</p>
        </div>
        <div className="flex flex-col justify-end items-center md:h-40">
          <h2 className=" font-bold">Contact</h2>
          <p>{contact.phoneNumber}</p>
          <p>{contact.email}</p>
        </div>
      </div>
    </div>
  );
}

export default LocationMaps;
