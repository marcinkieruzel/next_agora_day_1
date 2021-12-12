import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import Property from "./Property.js";
import categories from "../categories.json";
import useSWR from "swr";

const App = () => {
  const [properties, setProperties] = useState([]);
  const [userCategory, setUserCategory] = useState("");

  // useEffect(() => {
  //   if (userCategory) {
  //     (async () => {
  //       try {
  //         const data = await fetch(
  //           `http://centralvietnamrealty.noinputsignal.com/wp-json/cvr/v2/properties?page=1&limit=10&property_type=${userCategory}`
  //         );

  //         const json = await data.json();

  //         console.log(json.properties);

  //         setProperties(json.properties);
  //       } catch (error) {}
  //     })();
  //   }
  // }, [userCategory]);

  const { data, error } = useSWR(
    `http://centralvietnamrealty.noinputsignal.com/wp-json/cvr/v2/properties?page=1&limit=10&property_type=${userCategory}`,
    async (url) => {
      const d = await fetch(url);
      return await d.json();
    }
  );

  if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  return (
    <div className="container">
      <ul className="nav">
        {categories?.propertyType?.map((x, i) => {
          return (
            <li className="nav-item" key={i}>
              <a
                onClick={() => {
                  setUserCategory(x.slug);
                }}
                className="nav-link active"
                dangerouslySetInnerHTML={{ __html: x.name }}
              ></a>
            </li>
          );
        })}
      </ul>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div className={"row"}>
          {/* {properties.map((property) => {
            return <Property property={property} />;
          })} */}
          {data?.properties?.map((property, index) => {
            return <Property  key={property.id} property={property} />;
          })}
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));
