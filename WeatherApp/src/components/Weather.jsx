// import React, { useEffect, useState } from "react";
// import Search from "./Search";

// const Weather = () => {
//   const [search, setSearch] = useState("karachi");
//   const [loading, setLoading] = useState(false);
//   const [errMsg, setErrMsg] = useState(null);
//   const [weatherData, setWeatherData] = useState("");

//   const fetchWeatherData = async (param) => {
//     if (search.trim() !== "") {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=5d6edc0e197ad2988ad739c90741f149&units=metric
//         `
//         );
//         const data = await response.json();
//         console.log(data);
//         setWeatherData(data);
//         setLoading(false);
//       } catch (error) {
//         console.log("error: ", error.message);
//         setErrMsg(error.message);
//         setLoading(false);
//       }
//     } else {
//       alert("Please enter city...");
//     }
//   };
//   useEffect(() => {
//     fetchWeatherData("karachi");
//   }, []);
//   const handleSearch = async () => {
//     fetchWeatherData(search);
//   };

//   if (loading) {
//     return (
//       <div className="text-xl flex items-center justify-center h-screen font-bold">
//         <h1 className="text-center">Loading data! Please wait....</h1>
//       </div>
//     );
//   }

//   if (errMsg !== null) {
//     return (
//       <div className="text-xl flex items-center justify-center h-screen font-bold">
//         <h1 className="text-center">
//           Error Occured! <span className="text-red-600">{errMsg}</span>
//         </h1>
//       </div>
//     );
//   }
//   const getCurrentDate = () => {
//     return new Date().toLocaleDateString("en-us", {
//       weekday: "long",
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });
//   };
//   return (
//     <div className="flex flex-col items-center  p-2 justify-center w-full min-h-screen">
//       <div className="flex min-w-[90%] sm:min-w-[60%] rounded-2xl shadow-xl bg-blue-500 m-2 mx-auto border-2 min-h-[700px] pt-2 flex-col items-center justify-start">
//         <h1 className="text-center font-extrabold text-white  text-3xl sm:text-4xl">
//           Weather Forecast
//         </h1>

//         <Search
//           search={search}
//           setSearch={setSearch}
//           handleSearch={handleSearch}
//         />
//         <div className="text-white font-extrabold flex  flex-col gap-5  text-center p-5 min-h-[500px] rounded-sm sm:w-[90%] ">
//           <div className="bg-black text-white rounded-md">
//             <h2 className="font-bold text-3xl py-2">
//               {weatherData?.name}, {weatherData?.sys?.country}
//             </h2>
//           </div>
//           <div className="">
//             <span className="font-semibold text-xl py-1">
//               {getCurrentDate()}
//             </span>
//           </div>
//           <div className="font-semibold text-xl">
//             Temperature: {weatherData?.main?.temp}&deg;C
//           </div>
//           <div className="flex flex-col items-center justify-center">
//             <img
//               className="w-[150px] h-[150px] "
//               src={`../images/${
//                 weatherData && weatherData.weather[0]
//                   ? weatherData.weather[0].main
//                   : null
//               }.png`}
//               alt=""
//             />
//             <p>
//               {weatherData && weatherData.weather[0]
//                 ? weatherData.weather[0].main
//                 : null}
//             </p>
//           </div>

//           <div className=" flex gap-10 items-center justify-center">
//             <div className=" flex flex-col items-center justify-center gap-5 p-2 border-2-transparent hover:shadow-2xl hover:border-l-2 hover:border-b-2 hover:border-black rounded-md font-semibold text-lg">
//               <img className="w-[70px]" src="../images/wind.png" alt="" />
//               <div className="">
//                 <p className="">{weatherData?.wind?.speed} m/sec</p>
//                 <p>Wind speed</p>
//               </div>
//             </div>
//             <div className="flex flex-col items-center justify-center gap-5 p-2 border-2-transparent hover:shadow-2xl hover:border-l-2 hover:border-b-2 hover:border-black rounded-md font-semibold text-lg">
//               <img className="w-[70px]" src="../images/humidity.png" alt="" />{" "}
//               <div className="">
//                 <p>{weatherData?.main?.humidity}%</p>
//                 <p>Humidity</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;
import React, { useEffect, useState } from "react";
import Search from "./Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [weatherData, setWeatherData] = useState("");

  const fetchWeatherData = async (param) => {
    if (param.trim() !== "") {
      try {
        setLoading(true);
        setErrMsg(null);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=5d6edc0e197ad2988ad739c90741f149&units=metric`
        );
        const data = await response.json();
        if (response.ok) {
          setWeatherData(data);
        } else {
          setErrMsg(data.message);
        }
        setLoading(false);
      } catch (error) {
        console.log("error: ", error.message);
        setErrMsg("Failed to fetch weather data");
        setLoading(false);
      }
    } else {
      alert("Please enter city...");
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
      <div className="text-xl flex flex-col items-center gap-4 justify-center h-screen font-bold">
        <h1 className="text-center">Loading data! Please wait....</h1>
        <div className="h-[50px]  w-[50px] border-t-4 border-b-4 border-blue-500 rounded-full  animate-spin"></div>
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
    <div className="flex flex-col items-center p-2 justify-center w-full min-h-screen">
      <div className="flex min-w-[90%] sm:min-w-[60%] rounded-2xl shadow-xl bg-blue-500 m-2 mx-auto border-2 min-h-[700px] pt-2 flex-col items-center justify-start">
        <h1 className="text-center font-extrabold text-white text-3xl sm:text-4xl">
          Weather Forecast
        </h1>
        <Search
          errMsg={errMsg}
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {errMsg !== null ? (
          <div className="text-xl flex px-2 flex-col items-center justify-center  font-bold">
            <h1 className="text-center">
              Error Occurred! <span className="text-red-300">{errMsg}</span>
            </h1>
          </div>
        ) : (
          <div className="text-white font-extrabold flex flex-col gap-5 text-center p-5 min-h-[500px] rounded-sm sm:w-[90%]">
            <div className="bg-black text-white rounded-md">
              <h2 className="font-bold text-3xl py-2">
                {weatherData?.name}, {weatherData?.sys?.country}
              </h2>
            </div>
            <div>
              <span className="font-semibold text-xl py-1">
                {getCurrentDate()}
              </span>
            </div>
            <div className="font-semibold text-xl">
              Temperature: {weatherData?.main?.temp}&deg;C
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-[150px] h-[150px]"
                src={`../images/${
                  weatherData?.weather?.[0]?.main || "default"
                }.png`}
                alt=""
              />
              <p>{weatherData?.weather?.[0]?.main}</p>
            </div>

            <div className="flex gap-10 items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-5 p-2 border-2-transparent hover:shadow-2xl hover:border-l-2 hover:border-b-2 hover:border-black rounded-md font-semibold text-lg">
                <img className="w-[70px]" src="../images/wind.png" alt="" />
                <div>
                  <p>{weatherData?.wind?.speed} m/sec</p>
                  <p>Wind speed</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 p-2 border-2-transparent hover:shadow-2xl hover:border-l-2 hover:border-b-2 hover:border-black rounded-md font-semibold text-lg">
                <img className="w-[70px]" src="../images/humidity.png" alt="" />
                <div>
                  <p>{weatherData?.main?.humidity}%</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
