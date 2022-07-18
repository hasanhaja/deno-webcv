/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
}

const Counter = (props: CounterProps) => {
  const [count, setCount] = useState(props.start);
  const btn = (bgColor: string) => tw`bg-${bgColor}-500 flex-grow-1 px-2 py-1 border(gray-100 1) hover:bg-${bgColor}-600 rounded-md font-bold text-2xl hover:text-gray-200`;
  return (
    <div class={tw`flex gap-2 w-full`}>
      <button
          className={btn("red")}
          onClick={() => setCount(count - 1)}
          disabled={!IS_BROWSER}
      >
        -
      </button>
      <p className={tw`flex-grow-1 font-bold text-xl`}>{count}</p>
      <button
          className={btn("green")}
          onClick={() => setCount(count + 1)}
          disabled={!IS_BROWSER}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
