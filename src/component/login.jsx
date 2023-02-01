import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import studentData from "../data/students.json";

function Field(props) {
  return (
    <div className="my-4">
      <label htmlFor={props.id} className="block font-semibold">{props.name}</label>
      <label htmlFor={props.id} className="block font-semibold text-gray-500 text-xs">{props.helptext}</label>
      {props.children}
    </div>
  )
}

function LoginForm({roll, setRoll, setLoginStatus}) {
  const [password, setPassword] = useState("");
  const notifyInvalid = (msg) => toast(msg);

  const handleLogin = (roll, pass) => {
    console.log(roll, pass);
    // parse studentData and check if roll and pass match
    // if yes, set loggedIn to true
    console.log(studentData)
    if (studentData.students.some((student) => (student.roll == roll && student.password == password))) {
      setLoginStatus(true);
    } else {
      notifyInvalid("Invalid Credentials");
    }
  }

  const fieldStyles = "font-semibold w-full self-start px-4 py-2 mt-2 text-gray-700 bg-white border-2 rounded-lg border-black focus:outline-none";

  return (
    <form className="flex flex-col max-w-[350px] w-full mx-auto">
      <Field name="Roll Number" id="roll" helptext="Enter your roll number">
        <input id="roll" type="text" className={fieldStyles} placeholder="202101103" value={roll} onChange={(e) => setRoll(e.target.value)} />
      </Field>
      <Field name="Password" id="password" helptext="Enter your password">
        <input id="password" type="password" className={fieldStyles} placeholder="●●●●●●●●" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Field>
      <button disabled={!(roll && password)} type="button" className="px-4 py-2 mt-4 w-full self-center font-semibold text-white bg-black disabled:bg-gray-400 rounded-lg transition-all ease-in-out duration-500" onClick={() => handleLogin(roll, password)}>Login</button>
      <ToastContainer />
    </form>
  )
}

function StudentBio({roll}) {
  const student = studentData.students.find((student) => student.roll == roll);
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-gray-100 rounded-lg m-4 w-full max-w-[600px]">
        <div className="header h-20 rounded-t-lg" />
        <div className="p-6 flex flex-col items-center justify-center">
          <div className="rounded-full bg-gray-500 h-20 w-20 -mt-14">
            <img src={"/"+roll+".jpg"} alt="Profile Picture" className="rounded-full" width={80} height={80} />
          </div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 text-gray-600">{student.name}</h2>
          <p className="text-gray-500 font-semibold">{student.roll}</p>
          <table className="text-xs my-3 w-2/3 table-fixed">
            <tbody className="flex flex-col justify-between">
              <tr>
                <td className="w-16 px-2 py-2 text-gray-500 font-semibold">Address</td>
                <td className="text-gray-500 px-2 py-2 text-start">{student.address}</td>
              </tr>
              <tr>
                <td className="w-16 px-2 py-2 text-gray-500 font-semibold">Phone</td>
                <td className="text-gray-500 px-2 py-2">{student.phone}</td>
              </tr>
              <tr>
                <td className="w-16 px-2 py-2 text-gray-500 font-semibold">Email</td>
                <td className="text-gray-500 px-2 py-2">{student.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function Chat() {
  const [messages, setMessages] = useState([]);
  const [greetings, setGreetings] = useState(false);
  const [msg, setMsg] = useState("");
  
  const handleEnterKeypress = (e) => {
    if (e.key === "Enter" && msg) {
      setMessages([...messages, {body: msg, user: true}]);
      setMsg("");
    }
  }

  setTimeout(() => {
    if (!greetings) {
      setMessages([{body: "Hello there!", user: false}]);
      setTimeout(() => {
        setMessages([{body: "Hello there!", user: false}, {body: "How may I assist you today?", user: false}]);
      }, 500);
      setGreetings(true);
    }
    
  }, 500);

  return (
    <>
      <div className="flex flex-col justify-end w-full h-screen my-4 overflow-y-auto p-6">
        {
          messages.reverse().map((message, index )=> (
            <div key={index} className={"px-4 py-2 my-2 rounded-full" + (message.user ? " self-end bg-gray-200 popInAnimateUser" : " self-start bg-white popInAnimateY")}>{message.body}</div>
          ))
        }
      </div>
      <input type="text" className="w-full px-4 py-2 border-2 border-black rounded-lg focus:outline-none" placeholder="Type a message" value={msg} onChange={(e) => setMsg(e.target.value)} onKeyDown={handleEnterKeypress} />
    </>
  )
}

function ChatSection() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  return (
    <div className={"flex flex-col justify-end h-screen p-6" + (loading ? " animated-bg" : " mesh-bg")}>
      { !loading ? <Chat /> : null }      
    </div>
  )
}

export default function Login() {
  const [loggedIn, setLoggedIn] = useState(false); //change this back to false
  const [roll, setRoll] = useState("");
  const sectionStyles = "w-full flex flex-col justify-center min-h-screen"

  return (
    <main className="flex flex-col-reverse md:flex-row flex-wrap w-screen max-h-screen">
      <section className={sectionStyles + " md:w-1/2 lg:w-2/5 p-6 lg:p-10"}>
        {/* Login Section */}
        { loggedIn ? <StudentBio roll={roll} /> : 
          (<>
            <img className="h-24 mb-8 pr-8 mx-auto" src="/logo.jpeg"></img>
            <LoginForm roll={roll} setRoll={setRoll} setLoginStatus={setLoggedIn} />
            </>)
        }
      </section>
      <section className={sectionStyles + " md:w-1/2 lg:w-3/5"}>
        {/* Chatbot Section */}
        { loggedIn ? <ChatSection /> : (
          <div className="pic-bg w-full h-screen" />
        ) }
      </section>
    </main>
  )
}