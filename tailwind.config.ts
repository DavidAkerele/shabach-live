import type { Config } from "tailwindcss";


export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "2xl": { max: "1536px" },
            // => @media (max-width: 1535px) { ... }
            "1xl": { max: "1450px" },
            // => @media (max-width: 1535px) { ... }


            xl: { max: "1180px" },
            // => @media (max-width: 1279px) { ... }


            lg: { max: "1024px" },
            // => @media (max-width: 1023px) { ... }


            md: { max: "768px" },
            // => @media (max-width: 767px) { ... }


            sm: { max: "680px" },
            // => @media (max-width: 639px) { ... }
        },
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
} satisfies Config;

