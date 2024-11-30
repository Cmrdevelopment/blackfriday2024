/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Incluye tus archivos relevantes
  theme: {
    extend: {
      colors: {
        primary: "#706FE5",
        secondary: "#EAEAFC",
        footer: "#2E3E5C",
        cmrbolsa: "#328077",
        verdeClaro: "#31857E",
        gris: "#F3F4F6",
        fondosClaros: "#F2EFEC",
      },
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [], // Puedes añadir plugins aquí si los necesitas
};
