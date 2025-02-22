'use client'
import React from 'react'
import { Slider, Content, ProductList } from '@/components'

export default function Home() {
  return (
    <React.Fragment>
      <Slider />

      <Content>
        <ProductList />
      </Content>
    </React.Fragment>
  )
}
