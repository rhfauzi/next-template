import React from 'react'
import { useMooviewTimeProvider } from './app'

export default function MasterRiskClassProvider(props: any) {
  const { children } = props
  const MooviewTime = useMooviewTimeProvider()

  return (
    <MooviewTime.Provider
      value={{
        state: { ...MooviewTime.state },
        handler: MooviewTime.handler,
      }}
    >
      {children}
    </MooviewTime.Provider>
  )
}
