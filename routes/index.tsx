/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import PageWrapper from "../components/PageWrapper.tsx";
import Content from "../components/Content.tsx";

export default function Home() {
  return (
    <PageWrapper>
      <Content>
        Let's count!
      </Content>
      <Counter start={3} />
    </PageWrapper>
  );
}
