'use client'
import React from 'react'
import { Slider, Content, MovieList, Title } from '@/components'

export default function Home() {
  return (
    <React.Fragment>
      <Slider />

      <Content>
        <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-24">
          <Title isButton={true}>
            <div className="title">Discover Movies</div>
          </Title>

          <div className="movie-list grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
            <MovieList />
          </div>
        </div>
      </Content>
    </React.Fragment>
  )
}
