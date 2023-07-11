import { Account, Client, Databases } from "appwrite";

export const PROJECT_ID = "64abbc56bc67b3bac0dd";
export const DATABASE_ID = "64abc27d3de0f10e4a84";
export const COLLECTION_ID_MESSAGES = "64abc284883595cbcaad";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("64abbc56bc67b3bac0dd");

export const account = new Account(client);
export const databases = new Databases(client);

export default client;
