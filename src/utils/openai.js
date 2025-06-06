import OpenAI from "openai";
import { OPEN_AI_API_KEY } from "../utils/constant";

const openai = new OpenAI({
  apiKey: OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true, // This is required for browser usage
  baseURL: "https://api.openai.com/v1", // Ensure the base URL is set correctly
});

export default openai;