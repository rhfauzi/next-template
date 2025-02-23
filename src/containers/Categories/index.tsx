'use client'
import React from 'react'
import { Content, Title, MovieList } from '@/components'
import { Sidebar } from '@/components'

export default function Categories() {
  return (
    <Content>
      <div className="pt-10 mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:px-24">
        <Title titleName="Movies" isButton={false}>
          <div className="text-4xl text-gray-50">Movies</div>
        </Title>

        <div className="category">
          <Sidebar />

          <div className="movie-list grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-4">
            <MovieList />
          </div>
        </div>
      </div>
    </Content>
  )
}
