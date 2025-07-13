import supabase from "@/utils/supabase";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data, { status: 200 });
}

export async function POST(req: Request, res: NextApiResponse) {
  const { id, title, content } = await req.json();

  const { data, error } = await supabase
    .from("posts")
    .insert({ id, title, content, createdAt: new Date().toISOString() });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data, { status: 201 });
}
