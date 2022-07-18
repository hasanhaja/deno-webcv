/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { ErrorPageProps } from "$fresh/server.ts";
import Content from "../components/Content.tsx";
import PageWrapper from "../components/PageWrapper.tsx";

export default function Error500Page({ error }: ErrorPageProps) {
    return (
        <PageWrapper>
            <Content>
                <p>
                    <span class={tw`font-bold`}>500 internal error: </span>
                    {(error as Error).message}
                </p>
            </Content>
        </PageWrapper>
    );
}
