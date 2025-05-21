import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-3 pb-12">
      <div className="text-center">
  
        <h2 className="text-2xl font-bold text-white">Academic Course</h2>

    
        <div className="w-24 h-1 bg-indigo-500 mx-auto my-4 rounded"></div>

      
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} جميع الحقوق محفوظة</p>

   
        <div className="mt-4 flex justify-center space-x-6">
         <Facebook size={20} className="hover:text-white" />
          <Twitter size={20} className="hover:text-white"/>
        <Instagram size={20} className="hover:text-white"/>
        </div>
      </div>
    </footer>
  );
}
