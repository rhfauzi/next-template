'use client'
import React from 'react'
import MooviewTimeProvider from 'src/contexts/_provider'
import { Loader, Navigation, Footer } from '@/components'

export default function AppLayout({ children }) {
  return (
    <MooviewTimeProvider>
      {/* {!pageShow && <PageCannotAccessed />} */}
      {/* {!loading && pageShow ? <Component {...pageProps} /> : ''} */}

      <div>
        <Navigation />

        {children}

        <Footer />
      </div>
    </MooviewTimeProvider>
  )
}
