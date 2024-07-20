function Previewer({ html }) {
  return (
    <div className="previewer" dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}

export default Previewer;
