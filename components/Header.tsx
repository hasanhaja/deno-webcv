/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Header = () => {
    return (
      <span class={tw`flex gap-2 w-full`}>
        <img
            class={tw`w-20 flex-shrink object-contain`}
            src="/logo.svg"
            alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class={tw`text-4xl pt-10 pb-5 grow`}>@hasanhaja</h1>
      </span>
    );
}

export default Header;
