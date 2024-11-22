import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-white py-3 px-5 border-b border-b-slate-200 h-20">
      <div className="text-2xl font-bold text-black">Mallenet</div>
      <input type="text" className="search-bar" placeholder="Search" />
      <div className="actions">
        <Button variant="default">Upload</Button>
        <span className="notifications">87</span>
        <img
          className="w-12 h-12 rounded-full"
          src="https://via.placeholder.com/40"
          alt="Profile"
        />
      </div>
    </header>
  );
}
