import { Id } from "../types/id";

export const generateId = (): Id => {
  return Math.floor(Math.random() * 10000);
};
