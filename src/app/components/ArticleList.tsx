import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function ArticleList() {
  return (
    <div>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/800/400"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm text-slate-900 pb-3">Published on 2025/07/08</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            laborum vel autem reprehenderit numquam quos excepturi amet illo.
            Ratione, fugiat! Fugiat, porro minima! Nostrum possimus tempore
            atque dolore officiis qui.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4 flex flex-col">
        <Link href="#" className="hover:opacity-75">
          <Image
            src="https://picsum.photos/800/400"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm text-slate-900 pb-3">Published on 2025/07/08</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            laborum vel autem reprehenderit numquam quos excepturi amet illo.
            Ratione, fugiat! Fugiat, porro minima! Nostrum possimus tempore
            atque dolore officiis qui.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
}
