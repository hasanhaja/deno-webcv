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
    </BaseLayout>
  );
}
