'use client'
import { useState } from "react"
import Editor from "./components/Editor"

Editor
export default function Home() {
  const [input, setInput] = useState('')
  return (
    <main className="flex">
      <Editor input={input} setInput={setInput} />
    </main>
  )
}
