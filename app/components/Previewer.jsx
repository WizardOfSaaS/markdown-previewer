"use client";
import "../github-markdown.css";
function Previewer({ html }) {
  return (
    <div
      className="previewer markdown-body"
      dangerouslySetInnerHTML={{
        __html:
          html ||
          `Write Markdown in the <em>Editor</em> pane to see preview here`,
      }}
    ></div>
  );
}

export default Previewer;
