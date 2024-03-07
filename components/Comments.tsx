'use client'

import { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import { useTheme } from 'next-themes'

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false)
  const { theme: nextTheme, resolvedTheme } = useTheme()
  const [commentsTheme, setCommentsTheme] = useState(
    nextTheme === 'dark' || resolvedTheme === 'dark' ? 'dark' : 'light_protanopia'
  )

  useEffect(() => {
    setCommentsTheme(nextTheme === 'dark' || resolvedTheme === 'dark' ? 'dark' : 'light_protanopia')
  }, [nextTheme, resolvedTheme])

  return (
    <>
      {!loadComments && <button onClick={() => setLoadComments(true)}>Load Comments</button>}
      {siteMetadata.comments && loadComments && (
        <>
          <script
            src="https://giscus.app/client.js"
            data-repo="xispector/sci_survivalnote"
            data-repo-id="R_kgDOLb3lfA"
            data-category="Announcements"
            data-category-id="DIC_kwDOLb3lfM4CdwTz"
            data-mapping="og:title"
            data-strict="0"
            data-reactions-enabled="1"
            data-emit-metadata="0"
            data-input-position="bottom"
            data-theme={commentsTheme}
            data-lang="ko"
            data-loading="lazy"
            async
          ></script>
          <div className="giscus-frame">
            <div className="giscus"></div>
          </div>
        </>
      )}
    </>
  )
}
