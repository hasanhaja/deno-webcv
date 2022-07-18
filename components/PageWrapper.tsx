/** @jsx h */
import { h, FunctionComponent } from "preact";
import { tw } from "@twind";
import Header from "./Header.tsx";

const PageWrapper: FunctionComponent<null> = ({ children }) => {
    return (
        <div class={tw`p-4 mx-auto max-w-screen-md`}>
            <Header />
            {children}
        </div>
    );
}

export default PageWrapper;
