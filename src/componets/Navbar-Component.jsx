function Navbar({ title, menus }) {
  return (
    <>
    <h2>{title}</h2>
    <div
    
      style={{
        width:"320px",
        backgroundColor: "rgba(129, 149, 180, 1)",
        padding: "16px",
        color: "white",
        margin:"10px",
        borderRadius:"8px"
      }}
    >
      

      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        {menus.map((menu, index) => (
          <li
            key={index}
            style={{
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {menu}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Navbar;
