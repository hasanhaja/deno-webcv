/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { UnknownPageProps } from "$fresh/server.ts";
import Content from "../components/Content.tsx";
import BaseLayout from "../components/BaseLayout.tsx";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <BaseLayout title="404 Page not found">
      <Content>
        <p>
          <span class={tw`font-bold`}>404 not found:{" "}</span>
          {url.pathname}
        </p>
      </Content>
      <div class={tw`mb-2 text-center`}>
        <img
          src="/404_temp.png"
          class={tw`rounded-md mx-auto w-9/12`}
          alt="Website under construction image with crane next a laptop with orange cones."
        />
        <p class={tw`text-xl`}>
          Sorry, I'm still slowly building all of these pages! 🏗
        </p>
      </div>
    </BaseLayout>
  );
}
