import { useState, useEffect } from 'react'

import './Field.css'

export const Field = (props) => {
  const { type, className, children, value, spanText, id, onChange, onClick, valueOfChecked, actorsSelected } = props

  const [isChecked, setIsChecked] = useState(false)
  const [checkedInCard, setCheckedInCard] = useState(false)

  const [focused, setFocused] = useState(false)

  useEffect(() => {
    setCheckedInCard(valueOfChecked)
  }, [valueOfChecked])

  const handleFocus = () => {
    if (value?.length === 0) {
      setFocused(true)
    }
  }

  const handleChange = (event) => {
    setIsChecked(event.target.checked)
    setCheckedInCard(event.target.checked)
    if (actorsSelected) {
      actorsSelected(event.target.checked, event.target.id)
    }
  }

  return (
    <div className={className}>
      <label htmlFor={value} className='text-label'>
        {children}
      </label>

      <input
        type={type}
        value={value}
        onChange={type === 'text' ? onChange : handleChange}
        onClick={onClick}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
        checked={valueOfChecked ? checkedInCard : isChecked}
        className={
          type === 'text' && spanText && value.length === 0
            ? 'input-text required'
            : type === 'checkbox'
            ? 'input-checkbox'
            : 'input-text'
        }
      />

      <span
        className={
          spanText && value?.length === 0
            ? 'span'
            : !spanText && value?.length === 0 && focused
            ? 'span span-on-blur'
            : 'span-none'
        }>
        {spanText}
      </span>
    </div>
  )
}
