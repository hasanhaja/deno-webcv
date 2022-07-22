/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer class={tw`mt-auto bg-gray-200`}>
      <div class={tw`px-4 pt-8 pb-4 mx-auto max-w-screen-xl`}>
        <h1 class={tw`text-gray-600`}>
          {`Copyright \u00A9 ${year} Hasan Ali`}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
