import React from 'react'

export default function Button({aspect, action, label}) {
  return (
    <button className={aspect} onClick={action}>{label}</button>
  )
}
