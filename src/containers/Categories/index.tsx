'use client'
import React from 'react'
import { Content, Title, MovieList } from '@/components'

const dataGenres = [
  { name: 'Action', value: 'action' },
  { name: 'Adventure', value: 'adventure' },
  { name: 'Animation', value: 'animation' },
  { name: 'Comedy', value: 'comedy' },
  { name: 'Crime', value: 'crime' },
  { name: 'Documentary', value: 'documentary' },
  { name: 'Drama', value: 'drama' },
  { name: 'Family', value: 'family' },
  { name: 'Fantasy', value: 'fantasy' },
  { name: 'History', value: 'history' },
  { name: 'Horror', value: 'horror' },
]

export default function Categories() {
  return (
    <React.Fragment>
      <Content>
        <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-24">
          <Title titleName="Movies" isButton={false}>
            <div className="text-4xl text-gray-50">Movies</div>
          </Title>

          <div className="category">
            <div className="sidebar">
              <div className="title">Sort Result By</div>
              <div className="line-sm" />
              <div className="sorting">
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
              <div className="genres-box">
                {dataGenres.map((items: any, index: number) => (
                  <div key={index} className="flex justify-between items-center mb-4">
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {items.name}
                    </label>
                    <input
                      id="red-checkbox"
                      type="checkbox"
                      value={items.value}
                      className="w-4 h-4"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="movie-list grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-4">
              <MovieList />
            </div>
          </div>
        </div>
      </Content>
    </React.Fragment>
  )
}
