module.exports = {
  purge: ["apps/ssr/pages/**/*.{js,ts,jsx,tsx}", "apps/ssr/components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("../../tailwind.workspace")],
};
