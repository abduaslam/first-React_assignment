function Card({ title, description, buttonText }) {
  return (
    <div
      style={{
        width:"320px",
        backgroundColor:"rgba(229, 212, 247, 0)",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "20px",
        width: "300px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "#0f172a" }}>{title}</h2>

      <p style={{ color: "#898f97ff" }}>{description}</p>

      <button
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
