/** @jsx h */
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

const NavLink = (
  { href, children }: { href: string; children: ComponentChildren },
) => (
  <a
    class={tw`text-2xl hover:underline md:text-3xl`}
    href={href}
  >
    {children}
  </a>
);
// TODO At the md breakpoint, the nav list should collapse
// Three size: normal, md and xl
// Move mobile navbar to islands (maybe have a SSR navbar for desktop?)
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Fragment>
      <button aria-controls="primary-navigation" aria-expanded={expanded}>
        <span class={tw`sr-only`}>Menu</span>
      </button>
      <nav class={tw`md:flex md:items-center md:justify-between`}>
        <ul
          class={tw`md:flex md:items-center md:gap-2`}
          id="primary-navigation"
        >
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/weather">Weather</NavLink>
          </li>
          <li>
            <NavLink href="/count">Counter</NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
