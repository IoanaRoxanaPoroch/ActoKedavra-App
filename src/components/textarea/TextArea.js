import { useState } from 'react'

import './TextArea.css'

export const TextArea = ({ characters, value, className, labelText, spanText, name, maxLength, onChange }) => {
  const message = () => {
    let result

    if (characters > 180 || characters === 180) {
      result = 0
    } else {
      result = 180 - characters
    }
    return result
  }

  const chars = message()
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    if (value?.length === 0) setFocused(true)
  }

  return (
    <div className={className}>
      <label className='text-label'>{labelText}</label>
      <textarea
        className={spanText && value.length === 0 ? 'textarea required' : 'textarea'}
        type='text'
        // id={spanText && value?.length === 0 ? 'required' : ''}
        name={name}
        maxLength={maxLength}
        value={value}
        characters={characters}
        onChange={onChange}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <div
        className={
          (spanText && value?.length === 0) || focused
            ? 'chars-remained-text chars-remaind-text-required'
            : 'chars-remained-text'
        }>
        <p>{chars} characters remained</p>
      </div>
      <span
        className={
          spanText && value?.length === 0
            ? 'span'
            : !spanText && value?.length === 0 && focused
            ? ' span span-on-blur'
            : ' span-none'
        }>
        {spanText}
      </span>
    </div>
  )
}
