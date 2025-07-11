import { notFound } from "next/navigation";
import { Article } from "./Article";

export async function getAllArticles(): Promise<Article[]> {
  const res = await fetch("http://localhost:3001/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Error fetching articles");
  }

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const data = await res.json();
  return data;
}

export async function getArticleById(id: string): Promise<Article> {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 400) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Error fetching articles");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const data = await res.json();
  return data;
}

export async function createArticle(
  id: string,
  title: string,
  content: string
): Promise<Article> {
  const currentDate = new Date().toISOString();
  const res = await fetch(`http://localhost:3001/posts/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, title, content, createdAt: currentDate }),
  });

  if (!res.ok) {
    throw new Error("Error fetching articles");
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticle = await res.json();
  return newArticle;
}
