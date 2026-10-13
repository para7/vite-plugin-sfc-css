import { css } from 'virtual:sfc-css'

export default function Other() {
  return (
    <h1 data-testid="other" className={styles.other}>
      other
    </h1>
  )
}

const styles = css`
  .other {
    color: rgb(0, 0, 255);
  }
`
