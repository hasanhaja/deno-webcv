/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { ErrorPageProps } from "$fresh/server.ts";
import Content from "../components/Content.tsx";
import BaseLayout from "../components/BaseLayout.tsx";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <BaseLayout title="500 Internal Error">
      <Content>
        <p>
          <span class={tw`font-bold`}>500 internal error:{" "}</span>
          {(error as Error).message}
        </p>
      </Content>
    </BaseLayout>
  );
}
