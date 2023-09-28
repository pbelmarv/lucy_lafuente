/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                dancing: "Dancing Script', cursive",
                caveat: ["Caveat", "cursive"],
            },
            colors: {
                schooner: {
                    50: "#f4f3f2",
                    100: "#e2e1df",
                    200: "#c7c4c1",
                    300: "#a7a29d",
                    400: "#8a817c",
                    500: "#807672",
                    600: "#6d6461",
                    700: "#59514f",
                    800: "#4d4746",
                    900: "#443f3f",
                    950: "#262222",
                },
                fedora: {
                    50: "#f8f7f8",
                    100: "#efefef",
                    200: "#dcdbdc",
                    300: "#bebbbd",
                    400: "#9a9699",
                    500: "#736f72",
                    600: "#666365",
                    700: "#545052",
                    800: "#474546",
                    900: "#3e3c3d",
                    950: "#292829",
                },
                "steel-blue": {
                    50: "#f3f6fb",
                    100: "#e4ecf5",
                    200: "#cfdfee",
                    300: "#adc9e3",
                    400: "#86aed4",
                    500: "#6a93c7",
                    600: "#5c80bc",
                    700: "#4c6aa9",
                    800: "#42588b",
                    900: "#394a6f",
                    950: "#262f45",
                },
                "menu-color": "#581c87",
            },
            backgroundImage: {
                "open-menu": "url('../images/system/menu.svg')",
                "close-menu": "url('../images/system/close.svg')",
            },
        },
    },
    plugins: [],
};
