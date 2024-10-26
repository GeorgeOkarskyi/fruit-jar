/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_GET_FRUITS_API_URL: string;
}
interface ImportMeta {  
    readonly env: ImportMetaEnv;
}