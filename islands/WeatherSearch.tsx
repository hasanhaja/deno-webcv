/** @jsx h */
import {h} from "preact";
import Searcher from "./Searcher.tsx";
import {useState} from "preact/hooks";
import {WeatherData, WeatherDataType} from "../schema/WeatherData.ts";
import {FormType} from "../schema/Form.ts";
import WeatherCard from "../components/WeatherCard.tsx";

// TODO add more fields so FormType contains unit and other parameters
// TODO better error handling
const fetchWeatherData = async (
    city: FormType = "London",
    unit: string = "metric"
): Promise<WeatherDataType | null> => {
    try {
        const data = await fetch(`https://deno.hasanhaja.com/api/weather?city=${city}`,{
            headers: {
                accept: "application/json",
            },
        });
        const json = await data.json();

        return WeatherData.parse(json);
    } catch (e) {
        console.error("API fetch or parse failed");
        console.error(e);
        return null;
    }
}

const WeatherSearch = () => {
   const [data, setData] = useState<WeatherDataType>(null);
    const [submitting, setSubmitting] = useState(false);

    return <div>
        <Searcher handleSubmit={async (formData) => {
            setSubmitting(true);
            const resp = await fetchWeatherData(formData);
            setSubmitting(false);
            if (!resp) {
                console.error("No data found");
            }
            setData(resp);
        }} />
        {
            submitting ? <p>Submitting...</p> : null
        }
        {
            data
                ?
                <WeatherCard data={data} />
                : null
        }
    </div>
}

export default WeatherSearch;
