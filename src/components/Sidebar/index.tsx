import React from 'react'
import { dataGenres } from 'src/const/dataOptions'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="title">Sort Result By</div>
      <div className="line-sm" />
      <div className="py-5 px-5">
        <select
          id="sorting"
          defaultValue={'popularity'}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="popularity">Popularity</option>
          <option value="popularity asc">Popularity Ascending</option>
          <option value="popularity desc">Popularity Descending</option>
          <option value="date asc">Release Date Ascending</option>
          <option value="date desc">Release Date Descending</option>
          <option value="rating asc">Rating Ascending</option>
          <option value="rating desc">Rating Descending</option>
        </select>
      </div>
      <div className="line-sm" />
      <div className="title">Genres</div>

      <div className="line-sm" />
      <div className="genres-box py-5 px-5">
        {dataGenres.map((items: any, index: number) => (
          <div key={index} className="flex justify-between items-center mb-4">
            <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
              {items.name}
            </label>
            <input id="red-checkbox" type="checkbox" value={items.value} className="w-4 h-4" />
          </div>
        ))}
      </div>
    </div>
  )
}
