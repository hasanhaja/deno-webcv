/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import {WeatherDataType} from "../schema/WeatherData.ts";

type WeatherCardProps = {
    data: WeatherDataType;
}

const WeatherCard = ({ data }: WeatherCardProps) => {
    return (
        <div class={tw`bg-blue-200 rounded-md p-10 mb-2`}>
            <h1 class={tw`text-2xl p-1 font-medium`}>{data.city.name}</h1>
            <div class={tw`flex gap-1`}>
                <h1 class={tw`text-4xl font-bold text-right pt-3 flex-grow-1`}>{data.list[0].main.temp} &#176;C</h1>
                <div class={tw`pt-3 flex-grow-1`}>
                    <h3 class={tw`text-2xl text-center pb-1`}>(Feels like {data.list[0].main.feels_like} &#176;C)</h3>
                    <h3 class={tw`text-xl text-center pb-1`}>Humidity {data.list[0].main.humidity}%</h3>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
