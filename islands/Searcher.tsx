/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import {useState} from "preact/hooks";
import {Form, FormType} from "../schema/Form.ts";

type SearcherProps = {
    handleSubmit: (formData?: FormType) => void;
};

const Searcher = ({ handleSubmit }: SearcherProps) => {
    const [formData, setFormData] = useState<FormType>(null);
    // TODO City does not exist error
    const [error, setError] = useState(false);
    return (
    <form
        class={tw`mb-2`}
        onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
        setFormData(null);
    }}>
        <fieldset
            class={tw`bg-red-200 border-4 flex h-auto rounded-md`}
        >
            <input
                class={tw`flex-grow-1 p-4`}
                type="text"
                id="city"
                name="city"
                placeholder="Search"
                value={formData}
                onFocus={(e) => setError(false)}
                onChange={(e) => {
                try {
                    const parsed = Form.parse(e.target.value);
                    setFormData(parsed);
                } catch (e) {
                    console.error("Parse failed");
                    setError(true);
                }
            }}/>
            <input class={tw`text-3xl py-2 px-6`} type="submit" value="🔎"/>
        </fieldset>
    </form>
    );
};

export default Searcher;
