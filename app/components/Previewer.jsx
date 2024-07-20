function Previewer({ input }) {
  return (
    <div
      className="previewer"
      dangerouslySetInnerHTML={{ __html: input }}
    ></div>
  );
}

export default Previewer;
