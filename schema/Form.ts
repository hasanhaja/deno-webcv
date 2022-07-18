import { z } from "zod";

export const Form = z.string();
export type FormType = z.infer<typeof Form>;
