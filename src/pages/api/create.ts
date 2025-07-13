import supabase from "@/utils/supabase";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, title, content } = req.body;
  const { data, error } = await supabase
    .from("posts")
    .insert({ id, title, content, createdAt: new Date().toISOString() });

  if (error) {
    res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
}
