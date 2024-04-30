export async function generateStaticParams() {
  return [];
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    process.env.VERCEL_ENV
      ? `https://${process.env.VERCEL_URL}/api/get-time`
      : "http://localhost:3000/api/get-time",
    {
      method: "POST",
      next: { tags: [`time-${params.slug}`] },
    }
  );
  const data = await res.json();

  console.log(`Rendering page ${data.slug} with ${data.time}`);

  return (
    <div>
      Time retrieved for slug {params.slug}: {data.time}
    </div>
  );
}
