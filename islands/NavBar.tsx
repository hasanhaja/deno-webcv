/** @jsx h */
import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";

const NavLink = (
  { href, children }: { href: string; children: ComponentChildren },
) => (
  <li class={tw`flex justify-end`}>
    <a
      class={tw`text-2xl hover:underline md:text-3xl p-1 pr-4`}
      href={href}
    >
      {children}
    </a>
  </li>
);
// TODO At the md breakpoint, the nav list should collapse
// Three size: normal, md and xl
// Move mobile navbar to islands (maybe have a SSR navbar for desktop?)
const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Fragment>
      <button
        class={tw`md:hidden z-[9999] absolute top-8 right-8`}
        onClick={() => setExpanded((prev) => !prev)}
        aria-controls="primary-navigation"
        aria-expanded={expanded}
      >
        <span class={tw`sr-only`}>Menu</span>
        <img
          class={tw`w-10 h-10`}
          src={expanded ? "/close-menu.svg" : "/hamburger-menu.svg"}
          alt={expanded ? "Close menu" : "Open menu"}
        />
      </button>
      <nav
        class={tw
          `md:flex md:items-center md:justify-between md:mb-2 bg-green-300 rounded-md md:bg-transparent`}
      >
        <ul
          class={tw`md:flex md:items-center md:gap-2 ${
            expanded ? "block" : "hidden"
          }`}
          id="primary-navigation"
          aria-hidden={!expanded}
          hidden={!expanded}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/weather">Weather</NavLink>
          <NavLink href="/count">Counter</NavLink>
          <NavLink href="/picks">Picks</NavLink>
        </ul>
      </nav>
    </Fragment>
  );
};

export default NavBar;
