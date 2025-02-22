'use client'
import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
import { Loader } from 'src/components'

export default function AppLayout({ Component, pageProps }: { Component: any; pageProps: any }) {
  // const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [pageShow, setPageShow] = useState(true)
  console.log('Component', Component)
  console.log('pageProps', pageProps)

  const handleStart = () => {
    setLoading(true)
  }

  const handleStop = () => {
    setLoading(false)
  }

  // useEffect(() => {
  //   router.events.on('routeChangeStart', handleStart)
  //   router.events.on('routeChangeComplete', handleStop)
  //   router.events.on('routeChangeError', handleStop)

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart)
  //     router.events.off('routeChangeComplete', handleStop)
  //     router.events.off('routeChangeError', handleStop)
  //   }
  // }, [router])

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
      {!loading && pageShow ? <Component {...pageProps} /> : ''}
    </React.Fragment>
  )
}
