import TopBanner from "../component/TopBanner";
export default function Contact() {
  return (
    <>
    <TopBanner/>
    <div  dir="rtl" className="bg-gray-50 min-h-screen py-16 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">تواصل معنا</h2>
          <p className="text-gray-700 mb-6">
            نحن هنا للإجابة على استفساراتك وتقديم الدعم الكامل لك. لا تتردد في التواصل معنا عبر البيانات التالية أو استخدام النموذج.
          </p>

          <ul className="space-y-4 text-gray-600">
            <li> 📍 العنوان: الرياض، المملكة العربية السعودية </li>
            <li> 📞 الهاتف: 0501234567 </li>
            <li> ✉️ البريد الإلكتروني: support@academiccourses.com </li>
          </ul>
        </div>

       
        <form className="bg-white shadow-lg rounded-xl p-6 space-y-4">

          <div>
            <label className="block text-gray-700 mb-1">الاسم الكامل</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="اكتب اسمك هنا"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">البريد الإلكتروني</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">رسالتك</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="اكتب استفسارك هنا..."
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
            إرسال
          </button>
        </form>
      </div>
      </div>
      </>
  );
}
