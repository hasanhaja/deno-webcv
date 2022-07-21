/** @jsx h */
import { ComponentChildren, h } from "preact";
import { tw } from "@twind";

type ContentProps = {
  bgColor?: string;
  children: ComponentChildren;
};

const Content = ({ bgColor = "bg-gray-200", children }: ContentProps) => {
  return (
    <div class={tw`${bgColor} rounded-md p-10 mb-2`}>
      {children}
    </div>
  );
};

export default Content;
