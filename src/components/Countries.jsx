import { useEffect, useState } from "react";
import { getCountries } from "../requests";
import CountryCard from "./CountryCard";
import FilterCountry from "./FilterCountry";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [loader, setLoader] = useState(false);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(false);
  const [countryName, setCoutryName] = useState("Uzbekistan");
  const [region] = useState([
    "all",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);
  const handleChange = (e) => {
    const value = e.target.value;
    setFilter(value === "all" ? value : "region/" + value);
  };

  const handleInput = (e) => {
    const country = e.target.value;
    setCoutryName(country);
    getCountries(countryName);
    console.log(country);
    
  };

  useEffect(() => {
    setLoader(true);
    getCountries(filter)
      .then((res) => {
        setCountries(res);
      })
      .catch(({ message }) => {
        setError(message);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [filter ]);

  if (loader) {
    return (
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center w-full h-full">
        <span className="loading loading-spinner loading-xl bg-white"></span>
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="my-container">
      <div className="flex justify-between my-2.5 mt-12">
        <FilterCountry
          countries={countries}
          handleChange={handleChange}
          handleInput={handleInput}
        />

        <select
          value={filter === "all" ? "all" : filter.replace("region/", "")}
          onChange={handleChange}
          defaultValue={filter}
          className="select"
        >
          <option disabled={true}>Filter by region</option>
          {region.map((el) => {
            return <option>{el}</option>;
          })}
        </select>
      </div>
      <ul className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {countries.map((el, index) => {
          return <CountryCard key={index} info={el} />;
        })}
      </ul>
    </div>
  );
}
