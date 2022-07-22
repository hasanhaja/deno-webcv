/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import BaseLayout from "../components/BaseLayout.tsx";
import Content from "../components/Content.tsx";
import WeatherSearch from "../islands/WeatherSearch.tsx";

const Weather = () => {
  return (
    <BaseLayout title="Weather">
      <Content>
        <h1 class={tw`text-2xl mb-2`}>🌤 Weather Search</h1>
        <p>What's the weather like? 🤔</p>
      </Content>
      <WeatherSearch />
    </BaseLayout>
  );
};

export default Weather;
