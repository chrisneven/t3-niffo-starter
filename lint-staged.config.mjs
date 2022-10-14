const config = {
  "*.{md,mdx,html,css}": ["prettier --write"],
  "*.{tsx,ts,js,jsx}": ["prettier --write", "eslint --fix --max-warnings=0"],
  "*.{tsx,ts}": () => "tsc -p tsconfig.json --noEmit",
};

export default config;
