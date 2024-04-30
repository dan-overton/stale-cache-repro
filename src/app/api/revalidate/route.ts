import { revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { slug } = await request.json();
  console.log(`Revalidating tag time-${slug} in cache`);
  revalidateTag(`time-${slug}`);
  return Response.json({});
}
