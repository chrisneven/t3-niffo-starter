const config = {
  "*.{tsx,ts,js,jsx,md,mdx,html,css}": ["prettier --write"],
  "*.{tsx,ts,js,jsx}": ["eslint --fix max-warnings=0"],
  "*.{tsx,ts}": () => "tsc -p tsconfig.json --noEmit",
};

export default config;
