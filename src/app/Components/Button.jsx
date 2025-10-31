import React from 'react'

export default function Button({className, action, label}) {
  return (
    <button className={className} onClick={action}>{label}</button>
  )
}
