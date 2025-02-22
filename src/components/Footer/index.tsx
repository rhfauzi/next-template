'use client'
import React from 'react'
import { LogoBlack } from 'src/assets'

export default function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow-sm" style={{ background: 'rgb(21 25 30)' }}>
        <div className="mx-auto max-w-2xl sm:px-6 sm:py-24 lg:max-w-7xl lg:px-24">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{' '}
              <a href="#" className="hover:underline">
                MoovieTime
              </a>
              All rights reserved.
            </span>

            <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={LogoBlack.src} className="h-8" alt="Logo" />
            </a>

            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Made with NextJS
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
