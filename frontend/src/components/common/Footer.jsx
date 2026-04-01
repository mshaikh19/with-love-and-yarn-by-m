import { palette } from "../../styles/theme";

export default function Footer() {
  return (
    <footer style={{
      background: palette.text,
      color: "white",
      padding: "40px",
      textAlign: "center"
    }}>
      <p>© 2026 With Love & Yarn</p>
    </footer>
  );
}