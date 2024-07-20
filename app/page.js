"use client";
import { useState, useEffect } from "react"
import Editor from "./components/Editor"
import Previewer from "./components/Previewer"
import { marked } from "marked"
import ViewBar from "./components/ViewBar"

export default function Home() {
  const [input, setInput] = useState('')
  const [cleanedHtml, setCleanedHtml] = useState('')
  const [layout, setLayout] = useState('BOTH')
  useEffect(() => {
    const loadDOMPurify = async () => {
      const { default: DOMPurify } = await import('dompurify');
      const convertedHtml = marked(input);
      const sanitizedHtml = DOMPurify.sanitize(convertedHtml, { USE_PROFILES: { html: true } });
      setCleanedHtml(sanitizedHtml);
    };

    loadDOMPurify();
  }, [input]);
  return (
    <main className="flex">
      <ViewBar setLayout={setLayout} />
      <div className="editor-previewer">
        {layout !== 'PREVIEW' && <Editor input={input} setInput={setInput} />}
        {layout !== 'EDITOR' && <Previewer html={cleanedHtml} />}
      </div>
    </main>
  )
}
