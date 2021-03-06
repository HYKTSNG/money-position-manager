/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { TextField } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import CloudUploadIcon from "@material-ui/icons/CloudUpload"
import React, { useState } from "react"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}))

export const Index: React.FC = () => {
  // history_dataに入金履歴などを入れて出力したい

  const classes = useStyles()
  const [enterNumIncome, setEnterIncome] = useState(0)
  const [enterNumExpense, setEnterExpense] = useState(0)

  const [incomeSum, setIncomeSum] = useState(0)
  const [expenseSum, setExpenseSum] = useState(0)

  const [enterCharIncome, setEnterCharIncome] = useState("")
  const [enterCharExpense, setEnterCharExpense] = useState("")

  const [reasonIncome, setReasonIncome] = useState("")
  const [reasonExpense, setReasonExpense] = useState("")
  const [reasonIncomeHistoryData, setReasonIncomeHistoryData]: any[] = useState(
    []
  )
  const [numIncomeHistoryData, setNumIncomeHistoryData]: any[] = useState([])

  const onClickNumIncome = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    // 収入の計算＆理由
    e.preventDefault()
    // NULL の場合無視
    if (Number(incomeSum) === 0) return

    const numIncome = enterNumIncome + Number(incomeSum)
    setEnterIncome(numIncome)
    setEnterCharIncome(reasonIncome)
    // 収入履歴
    const nextReason = [...reasonIncomeHistoryData]
    nextReason.push(reasonIncome)
    setReasonIncomeHistoryData(nextReason)
    const nextNum = [...numIncomeHistoryData]
    nextNum.push(Number(incomeSum))
    setNumIncomeHistoryData(nextNum)
  }

  const onClickExpense = (e: { preventDefault: () => void }): void => {
    // 出費の計算＆理由
    e.preventDefault()
    setEnterExpense(enterNumExpense + Number(expenseSum))
    setEnterCharExpense(reasonExpense)
  }

  const sumMoney = enterNumIncome - enterNumExpense

  return (
    <div css={root}>
      <p css={title}>money-position-manager</p>

      <p css={subTitle}>現在の貯金</p>
      <div>{sumMoney}</div>

      {/* 収入 */}
      <form autoComplete="off" css={text} noValidate>
        <p css={subTitle}>収入</p>
        <div>収入額</div>
        <div>
          {enterCharIncome}
          <span>
            : <span>{enterNumIncome}</span>円入金されました
          </span>
          {/* upload履歴 */}
          <div>
            {reasonIncomeHistoryData} : {numIncomeHistoryData}
          </div>
        </div>
        {/* upload履歴 */}

        <TextField
          id="standard-basic"
          label="Reason"
          onChange={(e) => setReasonIncome(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="income"
          onChange={(e) => setIncomeSum(Number(e.target.value))}
          type="number"
        />

        <Button
          className={classes.button}
          color="default"
          onClick={onClickNumIncome}
          startIcon={<CloudUploadIcon />}
          variant="contained"
        >
          Upload
        </Button>
      </form>

      {/* 出費 */}
      <form autoComplete="off" css={text} noValidate>
        <p css={subTitle}>出費</p>
        <div>出費額</div>
        <div>
          {enterCharExpense}
          <span>
            : <span>{enterNumExpense}</span>円出金されました
          </span>
        </div>

        <TextField
          id="standard-basic"
          label="Reason"
          onChange={(e) => setReasonExpense(e.target.value)}
        />

        <TextField
          id="standard-basic"
          label="expense"
          onChange={(e) => setExpenseSum(Number(e.target.value))}
          type="number"
        />
        <Button
          className={classes.button}
          color="default"
          onClick={onClickExpense}
          startIcon={<CloudUploadIcon />}
          variant="contained"
        >
          Upload
        </Button>
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
const text = css`
  letter-spacing: 0.8px;
  line-height: 48px;
`
