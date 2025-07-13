import supabase from "@/utils/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { data, error } = await supabase.from("posts").select("*");

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ data }, { status: 200 });
}
