import React, { useEffect, useState } from "react";
import Search from "./Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  const fetchWeatherData = async (param) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=5d6edc0e197ad2988ad739c90741f149
      `
      );
      const data = await response.json();
      if (data) {
        console.log(data);
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrMsg(error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeatherData("karachi");
  }, []);
  const handleSearch = async () => {
    fetchWeatherData(search);
  };

  if (loading) {
    return (
      <div className="text-xl flex items-center justify-center h-screen font-bold">
        <h1 className="text-center">Loading data! Please wait....</h1>
      </div>
    );
  }

  if (errMsg) {
    return (
      <div className="text-xl flex items-center justify-center h-screen font-bold">
        <h1 className="text-center">
          Error Occured! <span className="text-red-600">{errMsg}</span>
        </h1>
      </div>
    );
  }
  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };
  return (
    <div className="flex items-center   justify-center w-100 h-screen">
      <div className="flex w-[700px] rounded-2xl bg-blue-500 m-2 mx-auto border-2 h-[670px] pt-10 flex-col items-center justify-start">
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        <div className="text-white">
          <div className="">
            <h2 className="font-bold text-3xl py-2">
              {weatherData?.name}, {weatherData?.sys.country}
            </h2>
          </div>
          <div className="">
            <span className="font-semibold text-xl py-1">
              {getCurrentDate()}
            </span>
          </div>
          <div className="">
            <b>Temperature: </b>
            {weatherData?.main?.temp}
          </div>
          <p>
            {weatherData && weatherData.weather[0]
              ? weatherData.weather[0].description
              : null}
          </p>
          <div className="flex gap-2 items-center justify-center">
            <div className="">
              <p>{weatherData?.wind?.speed}</p>
              <p>Wind speed</p>
            </div>
            <div className="">
              <p>{weatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
