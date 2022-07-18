/** @jsx h */
import { h } from "preact";
import Counter from "../islands/Counter.tsx";
import BaseLayout from "../components/BaseLayout.tsx";
import Content from "../components/Content.tsx";

const Count = () => {
  return (
    <BaseLayout title="Counter">
      <Content>Let's count!</Content>
      <Counter start={2} />
    </BaseLayout>
  );
};

export default Count;
