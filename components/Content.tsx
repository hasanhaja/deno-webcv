/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";

const Content: FunctionComponent<null> = ({ children }) => {
    return (
        <div class={tw`bg-gray-200 rounded-md p-10 mb-2`}>
            {children}
        </div>
    );
}

export default Content;
