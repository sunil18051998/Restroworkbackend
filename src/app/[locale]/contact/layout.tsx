const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages/68bae9e0a57be4c839d3077e`,
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
