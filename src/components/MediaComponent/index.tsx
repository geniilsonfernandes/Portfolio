import React, { useEffect, useState } from 'react'

interface MediaComponentProps {
  mediaQuery: string
  children: React.ReactNode
}

function MediaComponent(props: MediaComponentProps): JSX.Element | null {
  const { mediaQuery, children } = props

  const [isMatched, setIsMatched] = useState(false)

  useEffect(() => {
    const mediaQueryList =
      typeof window !== 'undefined' && window.matchMedia(mediaQuery)

    if (!mediaQueryList) return

    setIsMatched(mediaQueryList.matches)

    const handler = (event: MediaQueryListEvent) => {
      setIsMatched(event.matches)
    }

    mediaQueryList.addListener(handler)
    return () => mediaQueryList.removeListener(handler)
  }, [mediaQuery])

  return isMatched ? <>{children}</> : null
}

export default MediaComponent
