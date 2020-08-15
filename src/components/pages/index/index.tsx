/** @jsx jsx */
import { css, jsx } from "@emotion/core"

import React from "react"
import logo from "src/assets/logo.svg"

export const Index: React.FC = () => {
  return (
    <div css={root}>
      <header css={headerCss}>
        <img alt="logo" css={logoCss} src={logo} />
        <p>
          Edit <code>src/App.tsx</code>and save to reload.
        </p>
        <a
          css={link}
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const root = css`
  text-align: center;
`

const headerCss = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  margin: 48px;
`

const logoCss = css`
  height: 40vmin;
  pointer-events: none;

  animation: App-logo-spin infinite 20s linear;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const link = css`
  color: #61dafb;
`
