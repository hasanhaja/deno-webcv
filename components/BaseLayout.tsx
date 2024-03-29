/** @jsx h */
import { ComponentChildren, Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

type BaseLayoutProps = {
  title?: string;
  children: ComponentChildren;
};

const BaseLayout = ({ title, children }: BaseLayoutProps) => {
  return (
    <Fragment>
      <Head>
        <title>@hasanhaja{title ? ` | ${title}` : null}</title>
        <link rel="stylesheet" href="index.css" />
        <meta
          name="description"
          content="Fullstack portfolio web app built in Deno Fresh"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div class={tw`flex flex-col min-h-screen`}>
        <Header />
        <main>
          <div class={tw`p-4 mx-auto max-w-screen-xl`}>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default BaseLayout;
