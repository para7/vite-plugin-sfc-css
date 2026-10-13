import type { ParentProps } from 'solid-js'
import { HydrationScript } from '@solidjs/web'

// index.html の代わりの文書シェル。`src/Document.*` の規約で拾われる
export default function Document(props: ParentProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>solid</title>
        <HydrationScript />
      </head>
      <body>{props.children}</body>
    </html>
  )
}
