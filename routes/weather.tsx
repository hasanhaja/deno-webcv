/** @jsx h */
import { h } from "preact";
import BaseLayout from "../components/BaseLayout.tsx";
import Content from "../components/Content.tsx";
import WeatherSearch from "../islands/WeatherSearch.tsx";

const Weather = () => {
  return (
    <BaseLayout title="Weather">
      <Content>What's the weather like in London 🇬🇧? 🤔</Content>
      <WeatherSearch />
    </BaseLayout>
  );
};

export default Weather;
