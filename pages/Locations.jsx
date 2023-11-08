import LocationMaps from "../components/LocationMaps";

function Locations({ clicked }) {
  return (
    <div>
      <LocationMaps clicked={clicked} />
    </div>
  );
}

export default Locations;
