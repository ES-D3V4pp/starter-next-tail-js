import React from 'react'

export default function Button({action, label}) {
  return (
    <button onClick={action}>{label}</button>
  )
}
