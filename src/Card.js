import { useContext } from "react";
import myContext from "./mycontext";

export default function Card() {
  const { addressData } = useContext(myContext);
  return (
    <div style={{ display: "grid ", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {addressData?.map(({ id, city, street_name, state }) => (
        <div
          style={{
            border: "1px solid gray",
            margin: "10px",
            width: " 100px",
            height: "auto"
          }}
          key={id}
        >
          <p>
            city name: <span>{city}</span>
          </p>
          <p>
            street name: <span>{street_name}</span>
          </p>
          <p>
            state name: <span>{state}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
