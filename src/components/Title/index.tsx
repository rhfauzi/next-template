'use client'
import React from 'react'

export default function Title(props: any) {
  // { titleName, isButton }
  console.log('props', props)

  return (
    <div className="header-page">
      <div className="title-box">
        <div className="line" />
        {props.children}
      </div>

      {props?.isButton && (
        <div className="button-box">
          <button
            className="px-4 mt-4 bg-red-700 text-white hover:bg-red-950 transition"
            onClick={() => {
              // setSortBy(!sortBy)
              // handleSortBy('popularity')
            }}
          >
            Popularity
          </button>
          <button
            className="px-4 mt-4 bg-neutral-800 text-white hover:bg-neutral-950 transition"
            onClick={() => {
              // setSortBy(!sortBy)
              // handleSortBy('date')
            }}
          >
            Release Date
          </button>
        </div>
      )}
    </div>
  )
}
