import React from 'react'

const res = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/pages/68badd50a57be4c839d305e5`,
    { cache: "no-store" }
  );
  const data = await res.json();

export let metadata = {
  description: data.seo?.description,
  title: data?.title || data.title,
  keywords: data.seo?.keywords
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
