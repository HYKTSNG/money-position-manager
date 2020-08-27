/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { TextField } from "@material-ui/core"
import React, { useState } from "react"

export const Index: React.FC = () => {
  const [enterIncome, setEnterIncome] = useState(0)
  const [enterExpense, setEnterExpense] = useState(0)

  const [incomeCount, setIncomeCount] = useState(0)
  const [expenseCount, setExpenseCount] = useState(0)

  const onClickIncome = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    // 収入の計算
    e.preventDefault()
    setEnterIncome(enterIncome + Number(incomeCount))
  }

  const onClickExpense = (e: { preventDefault: () => void }): void => {
    // 出費の計算
    e.preventDefault()
    setEnterExpense(enterExpense + Number(expenseCount))
  }

  const sumMoney = enterIncome - enterExpense

  return (
    <div css={root}>
      <p css={title}>money-position-manager</p>

      <p css={subTitle}>現在の貯金</p>
      <div>{sumMoney}</div>

      <form autoComplete="off" noValidate>
        {/* 収入 */}
        <p css={subTitle}>収入</p>
        <div>収入額</div>
        <div>{enterIncome}</div>
        <TextField
          id="standard-basic"
          label="income"
          onChange={(e) => setIncomeCount(Number(e.target.value))}
          type="number"
        />
        <button css={btn} onClick={onClickIncome}>
          ADD
        </button>
      </form>

      <form autoComplete="off" noValidate>
        {/* 出費 */}
        <p css={subTitle}>出費</p>
        <div>出費額</div>
        <div>
          <span>-</span>
          {enterExpense}
        </div>
        <TextField
          id="standard-basic"
          label="expense"
          onChange={(e) => setExpenseCount(Number(e.target.value))}
          type="number"
        />
        <button css={btn} onClick={onClickExpense}>
          ADD
        </button>
      </form>
    </div>
  )
}

const root = css`
  text-align: center;
  margin: 80px;
  font-size: 32px;
  width: 25;
`
const title = css`
  margin: 32px;
  font-size: 64px;
`

const subTitle = css`
  margin: 24px;
  font-size: 48px;
  background-color: palegreen;
`

const btn = css`
  background-color: gold;
  border-color: yellow;
`
