'use client'
import React from 'react'

export default function Content({ children }) {
  return (
    <div className="container">
      <div
        style={{
          height: '333px',
          background: '#262c37',
          position: 'absolute',
          width: '100%',
          zIndex: -1,
        }}
      ></div>

      {children}
    </div>
  )
}
