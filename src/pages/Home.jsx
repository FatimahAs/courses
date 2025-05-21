const latestCourses = [
  {
    id: 1,
    title: "دورة تطوير الويب",
    image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "دورة UI/UX",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "دورة React",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function Home() {
  return (
    <div dir="rtl" className="bg-white min-h-screen mt-15">
    
      <section className="bg-indigo-600 text-white py-20 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">مرحباً بك في منصة Academic Courses</h1>
        <p className="text-lg max-w-2xl mx-auto">
          نحن نساعدك على بناء مستقبلك من خلال دورات احترافية في مجالات البرمجة، التصميم، وتطوير المهارات.
        </p>
      </section>

     
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">أحدث الدورات</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestCourses.map((course) => (
            <div key={course.id} className="bg-[rgba(197,194,194,0.18)] rounded-lg shadow-md overflow-hidden border-indigo-600 border-2 border-double ">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-center font-semibold text-indigo-600">{course.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
