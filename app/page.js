'use client'
import { useState } from "react"
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import { marked } from "marked"
import ViewBar from "./components/ViewBar"

export default function Home() {
  const [input, setInput] = useState('')
  const convertedHtml = marked(input)
  return (
    <main className="flex">
      <ViewBar />
      <div className="editor-previewer">
        <Editor input={input} setInput={setInput} />
        <Previewer html={convertedHtml} />
      </div>
    </main>
  )
}
