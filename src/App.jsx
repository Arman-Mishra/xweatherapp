import { useEffect, useState } from "react";
import "./App.css";
import Search from "./Search.jsx";
import Card from "./Card.jsx";

function App() {
  const [searchCity, setSearchCity] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchCity) fetchCityData(searchCity);
    else setSearchData("");
  }, [searchCity]);

  const fetchCityData = async (city) => {
    let url = new URL("https://api.weatherapi.com/v1/current.json");
    url.search = new URLSearchParams({
      q: city,
      key: "c2168688544249c1b2d110708242403",
    });

    try {
      setIsLoading(true);
      const resp = await fetch(url);

      if (resp.status === 200) {
        const response = await resp.json();
        setSearchData(response.current);
        setIsLoading(false);
      } else {
        setSearchData("");
        throw new Error("Error");
      }
    } catch (error) {
      setIsLoading(false);
      alert("Failed to fetch weather data");
    }
  };

  return (
    <div className="App">
      <Search setSearch={setSearchCity} />
      {isLoading ? (
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Loading data...
        </p>
      ) : searchData ? (
        <Card searchData={searchData} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
