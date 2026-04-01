export default function YarnBall({ color, size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="18" fill={color} />
    </svg>
  );
}