import canada from "../assets/shared/desktop/illustration-canada.svg";
import australia from "../assets/shared/desktop/illustration-australia.svg";
import unitedKingdom from "../assets/shared/desktop/illustration-united-kingdom.svg";
import Button from "./Button";
import circle from "../assets/shared/desktop/bg-pattern-small-circle.svg";

const text = [
  { img: canada, text: "CANADA", id: 0 },
  { img: australia, text: "AUSTRALIA", id: 1 },
  { img: unitedKingdom, text: "UNITED KINGDOM", id: 2 },
];

function SeeLocationCta() {
  return (
    <div className="flex flex-col items-center mb-32 md:mb-40 lg:flex-row lg:justify-around">
      {text.map(({ img, text, id }) => (
        <Location img={img} country={text} key={id} />
      ))}
    </div>
  );
}

export default SeeLocationCta;

function Location({ country, img }) {
  return (
    <div className=" mb-12">
      <img
        style={{
          background: `url(${circle})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" mb-12"
        src={img}
        alt={country}
      />

      <div className="flex flex-col items-center">
        <h1 className=" mb-8">{country}</h1>
        <Button text="SEE LOCATION" to="/locations" />
      </div>
    </div>
  );
}
