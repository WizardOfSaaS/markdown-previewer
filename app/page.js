'use client'
import { useState } from "react"
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import { marked } from "marked"
import ViewBar from "./components/ViewBar"
import DOMPurify from "dompurify"

export default function Home() {
  const [input, setInput] = useState('')
  const [layout, setLayout] = useState('BOTH')
  const convertedHtml = marked(input)
  const cleanedHtml = DOMPurify.sanitize(convertedHtml, { USE_PROFILES: { html: true } })
  return (
    <main className="flex">
      <ViewBar layout={layout} setLayout={setLayout} />
      <div className="editor-previewer">
        {layout !== 'PREVIEW' && <Editor input={input} setInput={setInput} />}
        {layout !== 'EDITOR' && <Previewer html={cleanedHtml} />}
      </div>
    </main>
  )
}
