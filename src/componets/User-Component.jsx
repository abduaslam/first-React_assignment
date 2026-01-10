function User({ name, email, role }) {
  return (
    <div
      style={{
        border: "1px solid rgba(229, 231, 235, 1)",
        padding: "12px",
        borderRadius: "6px",
        marginBottom: "16px",
        backgroundColor: "#f8fafc",
         color: "#0e1116ff",
         width:"320px"
      }}
    >
      <h3 style={{ margin: "4px 0" }}>{name}</h3>
      <p style={{ margin: "4px 0" }}>{email}</p>
      <p style={{ margin: "4px 0", fontStyle: "italic" }}>{role}</p>
    </div>
  );
}

export default User;
