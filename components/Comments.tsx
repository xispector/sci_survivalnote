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
      {!loadComments && <button onClick={() => setLoadComments(true)}>댓글 보기</button>}
      {loadComments && (
        <>
          <script
            src="https://giscus.app/client.js"
            data-repo={process.env.NEXT_PUBLIC_GISCUS_REPO}
            data-repo-id={process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID}
            data-category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
            data-category-id={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
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
