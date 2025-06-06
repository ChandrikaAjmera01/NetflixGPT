export const LOGO_URL =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BANNER_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/202ac35e-1fca-44f0-98d9-ea7e8211a07c/web/IN-en-20250512-TRIFECTA-perspective_688b8c03-78cb-46a6-ac1c-1035536f871a_large.jpg";
export const USER_AVATAR_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNU6thkHYg_NEpP2n3JBwK8CfWbGtvLTba-Q&s";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer "+import.meta.env.VITE_API_TMDB_API_KEY, // Use Vite environment variable
  },
};
export const PLAY_BTN_URL = "https://static.thenounproject.com/png/117815-200.png"
export const MORE_INFO_BTN_URL = "https://cdn-icons-png.flaticon.com/512/8/8201.png";

export const TMDB_IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
    {identifier: 'en', name: 'English'},
     {identifier: 'hindi', name: 'हिंदी'}, 
     {identifier: 'spanish', name: 'Español'}];

// For Vite or similar tools, use import.meta.env
export const OPEN_AI_API_KEY = import.meta.env.VITE_API_OPEN_AI_API_KEY;