/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import BaseLayout from "../components/BaseLayout.tsx";
import Content from "../components/Content.tsx";

const Home = () => {
  return (
    <BaseLayout>
      <Content>
        <div
          class={tw`md:flex md:gap-16 text-center`}
        >
          <img
            class={tw
              `mx-auto md:mx-0 max-w-64 max-h-64 md:max-w-72 md:max-h-72 rounded-full`}
            src="/android-chrome-512x512.png"
          />
          <h1
            class={tw`pt-4 md:p-8 text-4xl md:text-6xl font-bold md:my-auto`}
          >
            Hi, I'm Hasan! 👋🏾
          </h1>
        </div>
      </Content>
    </BaseLayout>
  );
};

export default Home;
