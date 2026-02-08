// app/page.js
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import { Smartphone, BatteryCharging, Headphones } from "lucide-react";
import TypingEffect from "./TypingEffect";
import { products } from './ProductData';
import Swiper from './SwipereSction';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Navbar />
      {/* Hero Section */}
      <header className="relative text-center overflow-hidden">
        <Swiper/>
        <div className="relative z-10">
          <section className="py-20 flex flex-col items-center text-center">
            {/* <h2 className="text-gray-500 mb-4 text-lg">مرحباً بك في عالم التكنولوجيا</h2> */}

            {/* هنا يظهر النص المتحرك */}
            <p className="text-7xl md:text-7xl font-bold text-black p-3">
              اهلا بك في موقع تِك زوون
            </p>
            <p className="text-7xl md:text-7xl font-bold text-black p-3">
              كل ما تحتاجه في التكنولوجيا
            </p>
            <p className="text-7xl md:text-7xl font-bold text-black p-3">
              {" "}
              ! في مكانٍ واحد{" "}
            </p>

            {/* <p className="max-w-md mt-6 text-gray-400">
          اكتشف مجموعتنا المختارة بعناية من أفضل اكسسوارات الموبايل في السوق.
        </p> */}

            <button className="mt-8 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all">
              تسوق الآن
            </button>
          </section>
        </div>
        {/* لمسة جمالية خلفية */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl -z-0 opacity-50"></div>
      </header>

      {/* Featured Products Section */}
     <section className="max-w-7xl mx-auto px-6 py-16 bg-white" dir="">
      
      {/* الهيدر (العنوان على اليمين والزرار على اليسار) */}
      <div className="flex justify-between items-end mb-12">
        <button className="text-sm font-bold border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
          عرض الكل
        </button>

        <div className="">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">منتجات مميزة</h2>
          <div className="h-1.5 w-12 bg-black mt-2 mr-0"></div>
        </div>
      </div>

      {/* شبكة المنتجات - نفس تصميم الكارت الأول */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} dir="rtl" className="group  border border-gray-100 rounded-2xl p-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white">
            
            {/* منطقة الصورة بخلفية رمادية فاتحة جداً مثل أول تصميم */}
            <div className="bg-[#fcfcfc] aspect-square rounded-xl mb-6 flex items-center justify-center overflow-hidden border border-gray-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="object-contain w-4/5 h-4/5 group-hover:scale-110 transition-transform duration-500" 
              />
            </div>

            {/* تفاصيل المنتج */}
            <h3 className="font-bold text-gray-900 text-lg mb-1">{product.name}</h3>
            <p className="text-gray-400 text-xs mb-4">إكسسوارات أصلية 100%</p>
            
            <div className="flex justify-between items-center border-t pt-4">
              <span className="text-xl font-black text-gray-900">{product.price} ج.م</span>
              <button className="bg-black text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-800 active:scale-95 transition-all uppercase">
                إضافة للسلة
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Footer البسيط */}
      <footer className="border-t py-10 mt-20 text-center text-gray-400 text-xs">
        <p>© 2026 MOBILE STYLE. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
