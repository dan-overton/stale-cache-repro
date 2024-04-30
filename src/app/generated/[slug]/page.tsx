export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    process.env.VERCEL_ENV
      ? `https://${process.env.VERCEL_URL}/api/get-time`
      : "http://localhost:3000/api/get-time",
    {
      method: "POST",
      body: JSON.stringify({ slug: params.slug }),
      next: { tags: [`time-${params.slug}`] },
    }
  );

  const data = await res.json();

  return {
    title: `${params.slug} - ${data.time}`,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    process.env.VERCEL_ENV
      ? `https://${process.env.VERCEL_URL}/api/get-time`
      : "http://localhost:3000/api/get-time",
    {
      method: "POST",
      body: JSON.stringify({ slug: params.slug }),
      next: { tags: [`time-${params.slug}`] },
    }
  );
  const data = await res.json();

  console.log(`Rendering page ${params.slug} with ${data.time}`);

  return (
    <div>
      Time retrieved for slug {params.slug}: {data.time}
    </div>
  );
}
