import React, { useState } from 'react';
import { useNavigate } from 'react-router'; 

function FormCareer() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [city, setCity] = useState('');
  const [salary, setSalary] = useState('');
  const [reason, setReason] = useState('');
  const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [errors, setErrors] = useState({});

  const calculateAge = (date) => {
    const today = new Date();
    const birth = new Date(date);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const validate = () => {
    const newErrors = {};
    const age = calculateAge(birthDate);
    if (name.length < 4) newErrors.name = 'Name must be at least 4 characters.';
    if (!birthDate || age < 18 || age > 70) newErrors.age = 'Age must be between 18 and 70.';
    if (!city) newErrors.city = 'City is required.';
    if (!salary) newErrors.salary = 'Salary is required.';
    if (!reason) newErrors.reason = 'Reason is required.';
    if (!answers.q1 || !answers.q2 || !answers.q3) newErrors.questions = 'All questions must be answered.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log({ name, birthDate, city, salary, reason, answers });
      navigate("/confirm", {
      state: {
        name,
        birthDate,
        city,
        salary,
        reason,
        answers,
      },
    });
  };

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
        <div className="shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="px-4 lg:px-10 py-10 pt-0">
            <form onSubmit={handleSubmit}>
              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">User Information</h6>

              <div className="flex flex-wrap">
              
                <div className="w-full lg:w-6/12 px-4">
                  <label>Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

               
                <div className="w-full lg:w-6/12 px-4">
                  <label>Birth Date</label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  />
                  {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}
                </div>

                
                <div className="w-full lg:w-6/12 px-4 mt-4">
                  <label>City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  >
                    <option value="">Choose City</option>
                    <option value="riyadh">Riyadh</option>
                    <option value="jeddah">Jeddah</option>
                    <option value="dammam">Dammam</option>
                  </select>
                  {errors.city && <p className="text-red-500 text-xs">{errors.city}</p>}
                </div>

               
                <div className="w-full lg:w-6/12 px-4 mt-4">
                  <label>Salary</label>
                  <div>
                    <label><input type="radio" name="salary" value="3000-8000" onChange={(e) => setSalary(e.target.value)} /> 3000 - 8000</label>
                    <label className="ml-4"><input type="radio" name="salary" value="9000-13000" onChange={(e) => setSalary(e.target.value)} /> 9000 - 13000</label>
                    <label className="ml-4"><input type="radio" name="salary" value="15000+" onChange={(e) => setSalary(e.target.value)} /> 15000+</label>
                  </div>
                  {errors.salary && <p className="text-red-500 text-xs">{errors.salary}</p>}
                </div>
              </div>

             
              <hr className="my-6 border" />
              <h6 className="text-blueGray-400 text-sm mb-6 font-bold uppercase">Questions</h6>

              {['q1', 'q2', 'q3'].map((q, i) => {
                const questions = [
                  'Do you have experience with React or a similar framework?',
                  'Are you familiar with responsive web design?',
                  'Have you used version control systems like Git?'
                ];
                return (
                  <div key={q} className="w-full lg:w-12/12 px-4 mb-4">
                    <label>{questions[i]}</label>
                    <div>
                      <label><input type="radio" name={q} value="yes" onChange={(e) => setAnswers({ ...answers, [q]: e.target.value })} /> Yes</label>
                      <label className="ml-4"><input type="radio" name={q} value="no" onChange={(e) => setAnswers({ ...answers, [q]: e.target.value })} /> No</label>
                    </div>
                  </div>
                );
              })}
              {errors.questions && <p className="text-red-500 text-xs">{errors.questions}</p>}

             
              <hr className="my-6 border" />
              <h6 className="text-blueGray-400 text-sm mb-6 font-bold uppercase">Reason for applying</h6>
              <div className="w-full lg:w-12/12 px-4">
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  rows="4"
                  className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                />
                {errors.reason && <p className="text-red-500 text-xs">{errors.reason}</p>}
              </div>

              
              <div className="text-center mt-6">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-lg"
                >
                  NEXT
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormCareer;
