import "normalize.css"

import { Global, css } from "@emotion/core"
import React, { Fragment, ReactChild } from "react"

type OwnProps = {
  children: ReactChild
}

export const GlobalStyles: React.FC<OwnProps> = ({ children }) => {
  return (
    <Fragment>
      <Global styles={globalStyles} />
      {children}
    </Fragment>
  )
}

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`
