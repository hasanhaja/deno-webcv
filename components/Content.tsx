/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

type ContentProps = {
  children: ComponentChildren;
};

const Content = ({ children }: ContentProps) => {
  return (
    <div class={tw`bg-gray-200 rounded-md p-10 mb-2`}>
      {children}
    </div>
  );
};

export default Content;
