'use client'

import { css } from 'virtual:sfc-css'

export function ClientMark() {
  return (
    <p data-testid="client" className={styles.client}>
      client
    </p>
  )
}

const styles = css`
  .client {
    color: rgb(0, 128, 0);
  }
`
