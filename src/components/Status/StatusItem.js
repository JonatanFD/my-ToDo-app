import React from 'react'
import './StatusItem.css'

export default function StatusItem({value, text}) {
  return (
    <div className='status-item'>
        <div className='status-item-value'>{value}</div>
        <div className='status-item-content'>{text}</div>
    </div>
  )
}

