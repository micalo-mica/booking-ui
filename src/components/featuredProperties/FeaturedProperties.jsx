import { useEffect, useState } from "react";
// import { publicRequest } from "../../requestMethod";
import "./featuredProperties.css";
import { datas } from "../../../datas/data";
// import CircularProgress from "@mui/material/CircularProgress";
// import useFetch from "../../hooks/useFetch";

// const url = "/hotels?featured=true&limit=4";

function FeaturedProperties() {
  // const { data, loading, error } = useFetch(url);

  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await publicRequest.get(url);
  //       setData(res.data);
  //     } catch (err) {
  //       setError(err);
  //     }
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="fp">
      {/* {loading ? (
        <div className="spinnerContainer">
          <CircularProgress className="spinner" />
        </div>
      ) : ( */}
      <>
        {datas.map((item) => (
          <div className="fpItem" key={item.id}>
            <img src={item.img} alt="" className="fpImg" />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating && (
              <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>
            )}
          </div>
        ))}
      </>
      {/* )} */}
    </div>
  );
}

export default FeaturedProperties;
