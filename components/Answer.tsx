import React, { createContext, ReactChild, useContext, useState } from 'react'
const AnswerContext = createContext<{
  answer: string
  selected: string
  setSelected: (char: string) => void
}>({
  answer: '',
  selected: '',
  setSelected: (char: string) => {},
})

interface IAnswer {
  answer: string
  children: ReactChild[]
}

interface IOption {
  children: string
}

function Answer({ answer, children }: IAnswer) {
  const [selected, setSelected] = useState('')
  return (
    <AnswerContext.Provider value={{ answer, selected, setSelected }}>
      {children}
    </AnswerContext.Provider>
  )
}

function Option({ children }: IOption) {
  const { answer, selected, setSelected } = useContext(AnswerContext)

  const [defaultClass, setDefaultClass] = useState('default-answer-button')
  const isAnswer = answer === children.charAt(0)
  const active = selected === children.charAt(0)

  return (
    <button
      className={
        !active
          ? `${defaultClass}`
          : isAnswer
          ? 'correct-answer-button'
          : 'wrong-answer-button'
      }
      onClick={() => {
        if (active) {
          setSelected('')
        } else {
          setSelected(children.charAt(0))
        }
      }}
    >
      <span
        className={`mr-1 transition-all duration-200 ease-linear ${
          active && !isAnswer ? null : 'hidden'
        }`}
      >
        ❌
      </span>
      <span
        className={`mr-1 transition-all duration-200 ease-linear ${
          active && isAnswer ? null : 'hidden'
        }`}
      >
        ✅
      </span>
      {children}
    </button>
  )
}

Answer.Option = Option

export default Answer
