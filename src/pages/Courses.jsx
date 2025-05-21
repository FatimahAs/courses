const courses = [
  {
    id: 1,
    title: "دورة تطوير الويب",
    description: "تعلم بناء مواقع باستخدام HTML, CSS, JavaScript.",
    price: "300 ريال",
    duration: "4 أسابيع",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "دورة تصميم واجهات",
    description: "تعلم تصميم UI/UX بطريقة احترافية.",
    price: "250 ريال",
    duration: "3 أسابيع",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "دورة React للمبتدئين",
    description: "مدخل لبناء تطبيقات React بشكل عملي.",
    price: "400 ريال",
    duration: "5 أسابيع",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Courses() {
  return (
    <div dir="rtl" className="bg-gray-50 min-h-screen py-10 px-4 pt-25">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">الدورات المتاحة</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-gray-50 border-indigo-600 border-2 border-double rounded-xl overflow-hidden hover:shadow-lg transition">
            
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-indigo-600 mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="text-sm text-gray-700 space-y-1">
                <p>💰 السعر: <span className="font-medium text-green-600">{course.price}</span></p>
                <p>⏳ المدة: <span className="font-medium">{course.duration}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
