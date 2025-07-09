import { Article } from "./Article";

export async function getAllArticles(): Promise<Article[]> {
  const res = await fetch("http://localhost:3001/posts", { cache: "no-store" });
  const data = await res.json();
  return data;
}
