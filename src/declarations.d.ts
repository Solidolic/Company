declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string;
  readonly VITE_WEATHER_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
