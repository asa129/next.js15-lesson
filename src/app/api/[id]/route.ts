import supabase from "@/utils/supabase";
import { NextApiResponse } from "next";
import { notFound } from "next/navigation";

export async function GET(req: Request, res: NextApiResponse) {
  const id = req.url.split("/api/")[1];

  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    notFound();
  }

  return Response.json(data, { status: 200 });
}

export async function DELETE(req: Request, res: NextApiResponse) {
  const id = req.url.split("/api/")[1];

  const response = await supabase.from("posts").delete().eq("id", id);

  if (response.status === 500) {
    return Response.json({ error: response.statusText }, { status: 500 });
  }

  return Response.json({ message: "Deleted" }, { status: 200 });
}
