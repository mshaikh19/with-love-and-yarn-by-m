export default function Button({ children }) {
  return (
    <button className="bg-rose text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition">
      {children}
    </button>
  );
}