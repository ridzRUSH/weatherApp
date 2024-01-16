import { space } from "postcss/lib/list";
import { useEffect, useRef, useState } from "react";

export default function Search() {
  const searchText = useRef("New Delhi");
  const [cityName, setCityName] = useState("New Delhi");
  const [data, setData] = useState([]);
  const [loading, setLoding] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setData([]);
        const data = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
          }`
        );

        const jsonData = await data.json();

        await jsonData.map(async function (val) {
          const { lat, lon } = val;
          const cityData =
            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
              import.meta.env.VITE_WEATHER_API_KEY
            }
          `);

          const jsonCityData = await cityData.json();

          setData((prevData) => {
            console.log(prevData);
            return [...prevData, jsonCityData];
          });
        });

        setLoding(() => {
          return false;
        });
      } catch (e) {
        console.error(e);
        setLoding(() => {
          return false;
        });
      }
    };
    fetchData();
  }, [cityName]);

  function handleCityName() {
    setLoding(true);
    setCityName(searchText.current.value);
  }

  return (
    <section>
      <div className="flex  flex-1 gap-2 mb-4 justify-between">
        <label className="flex w-9 sm:w-72 md:w-[36rem]">
          <input
            ref={searchText}
            type="text"
            placeholder="New Delhi "
            className="flex-1 bg-slate-400 rounded placeholder:text-white md:text-xl focus:outline-none placeholder:pl-2 text-white text-xl"
          />
        </label>
        <button
          onClick={handleCityName}
          className="font-bold justify-end text-normal p-2 bg-rose-300 rounded md:m-4 md:p-4"
        >
          Search
        </button>
      </div>

      {loading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {data.map((val) => {
              return (
                <div className="flex flex-col bg-slate-500 rounded p-2 ">
                  <span>Name : {val.name}</span>
                  <span>
                    Temp : {Math.floor(val.main.temp - 215).toFixed(2)}
                  </span>
                  <span>Min_Temp : {}</span>
                  <span>
                    Max_Temp :{Math.floor(val.main.temp.max - 215).toFixed(2)}
                  </span>
                  <span>
                    Weather : {val.weather[0].main} , Description:
                    {val.weather[0].description}
                    {val.weather.drscription}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
