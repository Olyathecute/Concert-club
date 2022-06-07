import React from 'react'
import './Button.scss'

export default function Button({ name, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {name}
    </button>
  )
}
