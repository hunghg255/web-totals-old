import React, { createContext, ReactChild, useContext, useState } from 'react'
const AnswerContext = createContext<{ answer: string }>({ answer: '' })

interface IAnswer {
  answer: string
  children: ReactChild
}

interface IOption {
  children: string
}

function Answer({ answer, children }: IAnswer) {
  return (
    <AnswerContext.Provider value={{ answer }}>
      <div>
        <div>{children}</div>
      </div>
    </AnswerContext.Provider>
  )
}

function Option({ children }: IOption) {
  const { answer } = useContext(AnswerContext)
  console.log(answer)
  return <button>{children}</button>
}

Answer.Option = Option

export default Answer
