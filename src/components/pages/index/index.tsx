/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import React from "react"

export const Index: React.FC = () => {
  return (
    <div css={root}>
      <p>
        Edit <code>src/App.tsx</code>and save to reload.
      </p>
    </div>
  )
}

const root = css`
  text-align: center;
`
