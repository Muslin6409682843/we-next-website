// /app/components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h1 className="text-xl font-bold">My Company</h1>
      <div>
        <a href="#">Home</a>
        <a href="#" className="ml-4">About</a>
      </div>
    </nav>
  );
}