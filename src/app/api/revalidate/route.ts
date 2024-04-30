import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { slug } = await request.json();
  console.log(`Revalidating tag timeValue-${slug} in cache`);
  revalidateTag(`timeValue-${slug}`);
  return Response.json({});
}
