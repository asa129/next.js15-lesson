import supabase from "@/utils/supabase";
import type { NextApiRequest, NextApiResponse } from "next";
import { notFound } from "next/navigation";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", req.query.id)
        .single();

      if (error) {
        res.status(500).json({ error: error.message });
      }

      if (!data) {
        notFound();
      }

      res.status(200).json(data);
      break;
    case "DELETE":
      const response = await supabase
        .from("posts")
        .delete()
        .eq("id", req.query.id);

      if (response.status === 500) {
        res.status(500).json({ error: response.statusText });
      }

      res.status(200).json(response.status);
      break;
  }
}
