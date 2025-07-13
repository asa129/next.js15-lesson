import DeleteButton from "@/app/components/atom/DeleteButton";
import { deleteArticle, getArticleById } from "@/blogAPI";
import Image from "next/image";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  // const detailArticle = await getArticleById(params.id);

  const url = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${url}/api/${params.id}`, {
    next: { revalidate: 60 },
  });

  const detailArticle = await res.json();

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src="https://picsum.photos/800/400"
        alt=""
        width={1280}
        height={300}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <DeleteButton id={detailArticle.id} />
    </div>
  );
}
