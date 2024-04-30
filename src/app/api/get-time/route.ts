import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const time = new Date().valueOf();
  const { slug } = await request.json();
  console.log(`Returning ${time} from get-time POST for slug ${slug}`);
  return Response.json({ time });
}
