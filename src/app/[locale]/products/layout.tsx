const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages/68bae9a3a57be4c839d3072b`,
    { cache: "no-store" }
  );
  const data = await res.json();

export let metadata = {
  description: data.seo?.description,
  title: data?.title || data.title,
  keywords: data.seo?.keywords
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
