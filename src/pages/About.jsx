import TopBanner from "../component/TopBanner";
export default function About() {
  return (
    <>
       <TopBanner/>
    <section dir="rtl" className="bg-white py-16 px-4 md:px-8 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
           
        <div>
          <h2 className="text-3xl font-bold text-indigo-600 mb-4">من نحن؟</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            منصة <span className="font-semibold text-indigo-500">Academic Courses</span> تهدف إلى توفير محتوى تعليمي مميز وحديث
            في مجالات مختلفة تشمل تطوير الويب، التصميم، البرمجة، وإدارة الأعمال.
            نحن نؤمن بأن التعليم متاح للجميع، ونسعى لتقديم تجربة تعليمية سهلة وعملية
            تُمكن المتعلمين من تطوير مهاراتهم والانطلاق نحو مستقبل أفضل.
          </p>
			  </div>
			    <img
          src="./learning.png"
          alt="About Academic Courses"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      </section>
      </>
  );
}
