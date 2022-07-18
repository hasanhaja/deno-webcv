/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { UnknownPageProps } from "$fresh/server.ts";
import Content from "../components/Content.tsx";
import PageWrapper from "../components/PageWrapper.tsx";

export default function NotFoundPage({ url }: UnknownPageProps) {
    return (
        <PageWrapper>
            <Content>
                <p>
                    <span class={tw`font-bold`}>404 not found: </span>
                    {url.pathname}
                </p>
            </Content>
        </PageWrapper>
    );
}
