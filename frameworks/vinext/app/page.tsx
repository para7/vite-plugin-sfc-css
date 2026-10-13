import Link from 'next/link'
import { css } from 'virtual:sfc-css'
import { ClientMark } from './client-mark'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <h1 data-testid="home" className={styles.home}>
        home
      </h1>
      <ClientMark />
      <Link href="/other">other</Link>
    </main>
  )
}

const styles = css`
  .home {
    color: rgb(255, 0, 0);
  }
`
