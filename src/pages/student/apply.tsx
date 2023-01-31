import { useState } from "react";

export default function Apply() {
  const [roll, setRoll] = useState("");
  const [reason, setReason] = useState("");
  const [applicationType, setApplicationType] = useState("null");
  
  const fieldStyles = "font-semibold w-full md:w-96 px-4 py-2 mt-2 text-gray-700 bg-white border-2 rounded-lg border-black focus:outline-none";
  
  return (
    <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Student Application</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Fill out the following form for application</p>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">Roll Number</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  value={roll} onChange={(e) => setRoll(e.target.value)}/>
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="application" className="leading-7 text-sm text-gray-600">Application Type</label>
              <select id="application" name="application" className="w-full bg-gray-100 h-10 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={applicationType} onChange={(e) => setApplicationType(e.target.value)}>
                <option value="null">N/A</option>
                <option value="bonafide">Bonafide</option>
                <option value="medleave">Medical Leave</option>
                <option value="lor">Letter </option>
              </select>
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label htmlFor="reason" className="leading-7 text-sm text-gray-600">Reason for application</label>
              <textarea disabled={(applicationType == "null") ? true : false} id="reason" name="reason" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={reason} onChange={(e) => setReason(e.target.valu)} />
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
          </div>  
        </div>
      </div>
    </div>
  </section>

  )
}