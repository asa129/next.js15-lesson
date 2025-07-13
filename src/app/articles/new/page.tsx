"use client";
import { createArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateBlogPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // await createArticle(id, title, content);

    const url = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${url}/api`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content }),
    });

    const detailArticle = await res.json();

    setLoading(false);
    router.push("/");
    router.refresh();
  }
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ作成</h2>
      <form
        action=""
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            name=""
            id=""
            className="shadow border rounded w-full py-2 px-3 bg-white text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`py-2 px-4 border rounded-md bg-orange-300 hover:bg-orange-400 ${
            loading ? "bg-orange-300 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          投稿
        </button>
      </form>
    </div>
  );
}
