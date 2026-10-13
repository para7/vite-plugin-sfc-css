import { createFileRoute } from '@tanstack/solid-router'
import { css } from 'virtual:sfc-css'

export const Route = createFileRoute('/other')({ component: Other })

function Other() {
  return (
    <h1 data-testid="other" class={styles.other}>
      other
    </h1>
  )
}

const styles = css`
  .other {
    color: rgb(0, 0, 255);
  }
`
