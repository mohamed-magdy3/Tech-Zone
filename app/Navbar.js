// components/Navbar.jsx
import { Search, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-white sticky top-0 z-50">
      <div className="text-xl font-bold flex items-center gap-2">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">M</span>
        </div>
        <h1 className="text-black text-xs font-bold"> Tech Zone </h1>
      </div>

      <ul className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
        <li className="cursor-pointer hover:text-black">العروض</li>
        <li className="cursor-pointer hover:text-black">اكسسوارات موبايل</li>
        <li className="cursor-pointer hover:text-black">اجهزة كمبيوتر</li>
        <li className="cursor-pointer hover:text-black">شاشات كمبيوتر</li>
        <li className="cursor-pointer hover:text-black">الرئيسية</li>
      </ul>

      <div className="flex gap-5 items-center">
        <Search size={20} className="cursor-pointer" />
        <div className="relative cursor-pointer">
          <ShoppingBag size={20} />
          <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    </nav>
  );
}
