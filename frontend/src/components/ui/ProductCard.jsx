export default function ProductCard({ product }) {
  return (
    <div style={{
      borderRadius: "20px",
      overflow: "hidden",
      background: "white",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      transition: "0.3s"
    }}>
      <div style={{
        height: "150px",
        background: product.color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "50px"
      }}>
        {product.emoji}
      </div>

      <div style={{ padding: "16px" }}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}