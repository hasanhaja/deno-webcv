/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <h1>
          {`\u00A9 ${year} Hasan Ali`}
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
