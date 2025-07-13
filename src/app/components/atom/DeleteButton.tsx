"use client";

import React from "react";
import { deleteArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";

export default function DeleteButton(props: { id: string }) {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_API_URL;
  async function handleDelete(id: string) {
    // await deleteArticle(id);
    const res = await fetch(`${url}/api/${id}`, { method: "DELETE" });
    router.push("/");
    router.refresh();
  }
  return (
    <button
      className="bg-red-500 hover:bg-red-600 rounded-md py-2 px-5"
      onClick={() => handleDelete(props.id)}
    >
      削除
    </button>
  );
}
