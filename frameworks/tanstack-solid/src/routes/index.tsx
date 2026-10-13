import { createFileRoute, Link } from '@tanstack/solid-router'
import { css } from 'virtual:sfc-css'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <h1 data-testid="home" class={styles.home}>
        home
      </h1>
      <Link to="/other">other</Link>
    </main>
  )
}

const styles = css`
  .home {
    color: rgb(255, 0, 0);
  }
`
