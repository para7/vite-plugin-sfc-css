import { A } from '@solidjs/router'
import { css } from 'virtual:sfc-css'

export default function Home() {
  return (
    <main>
      <h1 data-testid="home" class={styles.home}>
        home
      </h1>
      <A href="/other">other</A>
    </main>
  )
}

const styles = css`
  .home {
    color: rgb(255, 0, 0);
  }
`
