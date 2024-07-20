import "../github-markdown.css";
function Previewer({ html }) {
  return (
    <div
      className="previewer markdown-body"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}

export default Previewer;
