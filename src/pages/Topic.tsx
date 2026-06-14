import { useRef } from 'react'
import SwirlBackground from '../components/SwirlBackground'
import Navbar from '../components/Navbar'
import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import 'katex/dist/katex.min.css'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useLoaderData } from 'react-router-dom'

interface Topic {
  topicTitle: string
  topicSlug: string
}

function splitByHeadings(md: string): string[] {
  const lines = md.split('\n')
  const chunks: string[] = []
  let current: string[] = []

  for (const line of lines) {
    if (/^#{1,3}\s/.test(line) && current.length > 0) {
      chunks.push(current.join('\n'))
      current = []
    }
    current.push(line)
  }

  if (current.length > 0) chunks.push(current.join('\n'))
  return chunks
}

export default function Topic() {
  const markdown = useLoaderData()
  const chunks = splitByHeadings(markdown)
  const parentRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: chunks.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 300,
    overscan: 3,
  })

  return (
    <div className='flex w-screen h-screen overflow-x-hidden scrollbar-none! scroll-smooth'>
      <Navbar />
      <SwirlBackground />
      <div
        ref={parentRef}
        className='m-4 p-4 w-screen h-screen overflow-y-auto'
      >
        <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
          {virtualizer.getVirtualItems().map((vItem) => (
            <div
              key={vItem.key}
              data-index={vItem.index}
              ref={virtualizer.measureElement}
              style={{ position: 'absolute', top: vItem.start, left: 0, right: 0 }}
            >
              {/* ✅ FIXED COLOR LAYER:
                Added 'prose dark:prose-invert' and 'max-w-none' directly here.
                'dark:prose-invert' automatically maps headers, text, and codes 
                to precise dark mode color systems.
              */}
              <div className='prose dark:prose-invert max-w-none'>
                <ReactMarkdown
                  remarkPlugins={[remarkMath, remarkGfm]}
                  rehypePlugins={[rehypeKatex]}
                >
                  {chunks[vItem.index]}
                </ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}