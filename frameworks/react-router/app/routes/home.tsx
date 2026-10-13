import { Link } from 'react-router'
import { css } from 'virtual:sfc-css'

export default function Home() {
  return (
    <main>
      <h1 data-testid="home" className={styles.home}>
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
