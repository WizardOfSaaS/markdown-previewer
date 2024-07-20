"use client";

function ViewBar({ layout, setLayout }) {
  function handleViewButtonClick(e) {
    setLayout(e.target.textContent);
    document
      .querySelectorAll(".viewbar button")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
  }
  return (
    <div className="viewbar">
      <button onClick={handleViewButtonClick}>EDITOR</button>
      <button onClick={handleViewButtonClick} className="active">
        BOTH
      </button>
      <button onClick={handleViewButtonClick}>PREVIEW</button>
    </div>
  );
}

export default ViewBar;
