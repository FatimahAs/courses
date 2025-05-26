import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Confirm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    name = "",
    birthDate = "",
    city = "",
    salary = "",
    reason = "",
    answers = { q1: "", q2: "", q3: "" } 
  } = location.state || {}; 

  const handleSubmit = () => {
    Swal.fire({
      title: "تم الإرسال!",
      text: "تم إرسال معلوماتك بنجاح.",
      icon: "success",
      confirmButtonText: "العودة للرئيسية",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <section  className="py-1 bg-blueGray-50 ">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
       <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
     

      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form >
          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Confirm User Information
          </h6>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="username">
                  Full Name
                </label>
                <p className="border-0 px-3 py-3  text-blue-900 bg-white rounded text-sm  w-full ease-linear transition-all duration-150">{name}</p>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                  Birth Date
                </label>
                 <p className="border-0 px-3 py-3  text-blue-900 bg-white rounded text-sm  w-full ease-linear transition-all duration-150">{birthDate}</p>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                City
                </label>
                 <p className="border-0 px-3 py-3  text-blue-900 bg-white rounded text-sm  w-full ease-linear transition-all duration-150">{city}</p>

              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                  Salary
                </label>
                <p className="border-0 px-3 py-3  text-blue-900 bg-white rounded text-sm  w-full ease-linear transition-all duration-150">{salary}</p>

              </div>
            </div>
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Question
          </h6>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
					Do you have experience with React or a similar JavaScript framework?	 
                </label>
		                <p className="border-0 px-3 py-3  text-blue-900 bg-white rounded text-sm  w-full ease-linear transition-all duration-150">{answers.q1}</p>

               </div>
							  </div>
							    <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                    Are you familiar with responsive web design principles? 
                </label>
					<p className="border-0 px-3 py-3  text-blue-900 bg-white rounded text-sm  w-full ease-linear transition-all duration-150">{answers.q2}</p>

              </div>
							  </div>
							    <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
Have you worked with version control systems like Git?
					 
                </label>
								                 <p className="border-0 px-3 py-3  text-blue-900 bg-white rounded text-sm  w-full ease-linear transition-all duration-150">{answers.q3}</p>

              </div>
            </div>

           
          </div>

          <hr className="mt-6 border-b-1 border-blueGray-300" />

          <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
            Why are you applying for this position?
          </h6>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" >
                   Reason
                </label>
				 <p className="border-0 px-3 py-3  text-blue-900 bg-white rounded text-sm  w-full ease-linear transition-all duration-150">{reason}</p>

              </div>
            </div>
          </div>
        </form>
				  </div>
		 <div className="text-center mb-2">
              <button
                onClick={handleSubmit}
                className="bg-indigo-600 text-white font-bold uppercase text-xs px-6 py-2 rounded shadow hover:shadow-md transition duration-150"
              >
                إرسال
              </button>
            </div>
    </div>
  </div>
</section>
  );
};

export default Confirm;
