function Editor({ input, setInput }) {
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <textarea
      className="editor w-max h-max"
      placeholder="Your Markdown here..."
      onChange={handleInputChange}
      value={input}
    ></textarea>
  );
}

export default Editor;
