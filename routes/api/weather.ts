import { HandlerContext } from "$fresh/server.ts";
import {WeatherData, WeatherDataType} from "../../schema/WeatherData.ts";
import {FormType} from "../../schema/Form.ts";

const fetchWeatherData = async (
    apiKey?: string,
    city: FormType = "London",
    unit: string = "metric"
): Promise<WeatherDataType | null> => {
    try {
        if (!apiKey) {
            console.error("API key not found");
            return null;
        }

        const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&apiKey=${apiKey}&units=${unit}`,{
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

export const handler = async (_req: Request, _ctx: HandlerContext): Promise<Response> => {
    const query = _req.url.split("?")[1];
    const [param, value] = query.split("=");
    if (param.toLowerCase() !== "city") {
        return new Response(JSON.stringify({ error: "Could not recognize request."}));
    }

    const data = await fetchWeatherData(Deno.env.get("WEATHER_API_KEY"), value);

    if (!data) {
        return new Response(JSON.stringify({ error: "No data found."}));
    }

    const body = JSON.stringify(data);
    return new Response(body);
};
