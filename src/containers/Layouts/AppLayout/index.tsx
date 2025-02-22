'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader, Header, Content, Footer } from '@/components'

export default function AppLayout({ children }) {
  const router = useRouter
  const [loading, setLoading] = useState(false)

  const handleStart = () => {
    setLoading(true)
  }

  const handleStop = () => {
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    // router.events.on('routeChangeStart', handleStart)
    // router.events.on('routeChangeComplete', handleStop)
    // router.events.on('routeChangeError', handleStop)
    // return () => {
    //   router.events.off('routeChangeStart', handleStart)
    //   router.events.off('routeChangeComplete', handleStop)
    //   router.events.off('routeChangeError', handleStop)
    // }
    setLoading(false)
  }, [router])

  useEffect(() => {
    localStorage.setItem('companyCode', 'PP01')
    localStorage.setItem('companyName', 'PT. Kleen Quip Indonesia')
    localStorage.setItem(
      'companySelectedObject',
      JSON.stringify({ id: 'PP01', name: 'PT. Kleen Quip Indonesia' }),
    )
    localStorage.setItem('config_language', 'id-ID')
    localStorage.setItem(
      'token',
      'ODZHeXJXZWwwRXl2ejVQdml2TUhWVF9DdmNPODEweGg1aE1keXZsS3hHay4xNzM0Njc5MTc4LjAxOTM4ZmZhLTJjYjQtNzI5MS04MzMxLTJjZDMwMWZjZjljYQ',
    )
  }, [])

  return (
    <React.Fragment>
      {loading && <Loader />}
      {/* {!pageShow && <PageCannotAccessed />} */}
      {/* {!loading && pageShow ? <Component {...pageProps} /> : ''} */}

      {!loading && (
        <div>
          <Header />

          {children}

          <Footer />
        </div>
      )}
    </React.Fragment>
  )
}
