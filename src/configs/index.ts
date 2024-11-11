import { config } from "dotenv";
config({ path: `.env` });

export const { DB_URI } = process.env;
export const PORT = process.env.PORT || 3003;
export const PACKAGE_SERVICE_URL =
  process.env.PACKAGE_SERVICE_URL || "localhost";
