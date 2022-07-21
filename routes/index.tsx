/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import BaseLayout from "../components/BaseLayout.tsx";
import Content from "../components/Content.tsx";

const sectionHeadingStyles = "text-4xl md:text-5xl font-bold pb-4";
const sectionSpacingStyles = "py-6 mb-2";
const paragraphStyles = "pb-3";

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

      <section
        class={tw`${sectionSpacingStyles}`}
      >
        <h1
          class={tw`${sectionHeadingStyles}`}
        >
          🤖 About me
        </h1>
        <p class={tw`${paragraphStyles}`}>
          I'm a Software Engineer @{" "}
          <a
            class={tw
              `transition underline hover:text-[#e40085] font-bold hover:font-extrabold`}
            href="https://www.cancerresearchuk.org/"
          >
            Cancer Research UK
          </a>, building{" "}
          <a
            class={tw
              `transition underline hover:text-[#0070f3] font-bold hover:font-extrabold`}
            href="https://nextjs.org/"
          >
            Next.js
          </a>{" "}
          apps. I love the web and I spend a lot of my time learning and playing
          with web technologies. My current favorite is{" "}
          <a
            class={tw
              `transition underline hover:text-[#ffdb1e] font-bold hover:font-extrabold`}
            href="https://fresh.deno.dev/"
          >
            Fresh
          </a>.
        </p>
        <Content>
          <div class={tw`flex gap-8 justify-center`}>
            <p
              class={tw
                `rounded-md text-3xl p-3 bg-gray-900 text-gray-200 my-auto`}
            >
              Social
            </p>
            <a href="https://twitter.com/hasanhaja">
              <img
                class={tw`w-14 min-w-10`}
                src="/twitter.png"
                alt="Blue Twitter bird logo"
              />
            </a>
            <a href="https://www.linkedin.com/in/hasanhaja/">
              <img
                class={tw`w-14`}
                src="/linkedin.png"
                alt="Blue LinkedIn logo"
              />
            </a>
            <a href="https://github.com/hasanhaja">
              <img
                class={tw`w-14`}
                src="/github.png"
                alt="Black GitHub logo"
              />
            </a>
          </div>
        </Content>
      </section>

      <Content>
        <div>
          <h1>Experience</h1>
        </div>
      </Content>
      <Content>
        <div>
          <h1>Skills</h1>
        </div>
      </Content>
      <Content>
        <div>
          <h1>Education</h1>
        </div>
      </Content>
    </BaseLayout>
  );
};

export default Home;
