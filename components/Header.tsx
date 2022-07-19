/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import NavBar from "../islands/NavBar.tsx";

// Three size: normal, md and xl
// Move mobile navbar to islands (maybe have a SSR navbar for desktop?)
const Header = () => {
  return (
    <header class={tw`md:flex md:justify-between`}>
      <div class={tw`flex gap-2`}>
        <img
          class={tw`w-20 flex-shrink object-contain`}
          src="/logo.svg"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h1
          class={tw
            `text-3xl my-auto mx-0 content-center md:text-4xl xl:text-5xl`}
        >
          @hasanhaja
        </h1>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
