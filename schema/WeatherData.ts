import { z } from "zod";

export const WeatherData = z.object({
    list: z.array(z.object({
        main: z.object({
           temp: z.number(),
           feels_like: z.number(),
           humidity: z.number().positive(),
        }),
        weather: z.array(z.object({
            main: z.string(),
            description: z.string(),
        })),
    })),
    city: z.object({
       name: z.string(),
       country: z.string(),
    }),
});

export type WeatherDataType = z.infer<typeof WeatherData>;
