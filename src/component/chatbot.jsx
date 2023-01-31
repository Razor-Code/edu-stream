import { useState } from 'react';
import { SiChatbot } from 'react-icons/si'

export default function ChatBot({ props }) {

    const [isOpen, setIsOpen] = useState(false);

    const [userMsg, setUserMsg] = useState([]);

    const [botMsg, setBotMsg] = useState([]);


    const handleUserMsg = (e) => {
        if (e.keyCode === 13) {
            setUserMsg([...userMsg, e.target.value]);
            e.target.value = '';
        }
    }

    return (
        <div className="fixed bottom-8 right-8">
            <div className='relative mb-3 h-[37rem] w-116 bg-white rounded-2xl border border-gray-600'>
                <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
                    <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-scroll h-[27rem] scrollbar-none">
                        <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Can be verified on any platform using docker</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144" alt="My profile" className="w-6 h-6 rounded-full order-2" />
                            </div>
                        </div>

                    </div>
                    <div className="absolute px-4 pt-4 mb-2 bottom-0 left-0">
                        <div className="relative flex">
                            <input type="text" placeholder="Write your message!" className="w-[22rem] focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-2 bg-gray-200 rounded-md py-3" />
                            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                                <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-blue-500 hover:bg-blue-400 focus:outline-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='relative ml-auto w-16 h-16 rounded-full shadow-md bg-blue-600 flex justify-center items-center'>
                <SiChatbot className="text-3xl text-white" />
            </div>
        </div>
    )
}

// export default function ChatBot() {



//     return (
//         <div className="flex items-center justify-center p-12 fixed bottom-0 right-0 shadow-md">
//             <div className="w-full">
//                 <div className={"formbold-form-wrapper mx-auto w-full max-w-[550px] rounded-lg border border-[#e0e0e0] bg-white" + (isOpen ? " block" : " hidden")}>
//                     <div className="flex items-center justify-between rounded-t-lg bg-[#6A64F1] py-4 px-9">
//                         <h3 className="text-xl font-bold text-white">Let's chat? - Online</h3>
//                     </div>
//                     <div className='h-96 w-80 relative'>
//                         <div className="absolute bottom-10 right-0">
//                             <div className="h-64 flex items-center justify-center flex-col w-full space-x-3 py-4 px-9 overflow-y-scroll">
//                                 {userMsg.map((msg, index) => (
//                                     <div key={index} className="p-3 bg-blue-100 rounded-full m-2 w-full">
//                                         {msg}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="absolute bottom-0">
//                             <input
//                                 type="text"
//                                 name="name"
//                                 id="name"
//                                 placeholder="Type Something"
//                                 className="w-80 rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//                                 onKeyDown={handleUserMsg}
//                             />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="mx-auto mt-12 flex max-w-[550px] items-center justify-end space-x-5">
//                     <button className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#6A64F1] text-white outline-none border-none" onClick={() => setIsOpen(p => !p)}>
//                         <span className={"cross-icon " + (isOpen ? "block" : "hidden")}>
//                             <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" clipRule="evenodd" d="M0.474874 0.474874C1.10804 -0.158291 2.1346 -0.158291 2.76777 0.474874L16.5251 14.2322C17.1583 14.8654 17.1583 15.892 16.5251 16.5251C15.892 17.1583 14.8654 17.1583 14.2322 16.5251L0.474874 2.76777C-0.158291 2.1346 -0.158291 1.10804 0.474874 0.474874Z" fill="white" />
//                                 <path fillRule="evenodd" clipRule="evenodd" d="M0.474874 16.5251C-0.158291 15.892 -0.158291 14.8654 0.474874 14.2322L14.2322 0.474874C14.8654 -0.158292 15.892 -0.158291 16.5251 0.474874C17.1583 1.10804 17.1583 2.1346 16.5251 2.76777L2.76777 16.5251C2.1346 17.1583 1.10804 17.1583 0.474874 16.5251Z" fill="white" />
//                             </svg>
//                         </span>
//                         <span className={"chat-icon " + (isOpen ? "hidden" : "block")}>
//                             <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M19.8333 14.0002V3.50016C19.8333 3.19074 19.7103 2.894 19.4915 2.6752C19.2728 2.45641 18.976 2.3335 18.6666 2.3335H3.49992C3.1905 2.3335 2.89375 2.45641 2.67496 2.6752C2.45617 2.894 2.33325 3.19074 2.33325 3.50016V19.8335L6.99992 15.1668H18.6666C18.976 15.1668 19.2728 15.0439 19.4915 14.8251C19.7103 14.6063 19.8333 14.3096 19.8333 14.0002ZM24.4999 7.00016H22.1666V17.5002H6.99992V19.8335C6.99992 20.1429 7.12284 20.4397 7.34163 20.6585C7.56042 20.8772 7.85717 21.0002 8.16659 21.0002H20.9999L25.6666 25.6668V8.16683C25.6666 7.85741 25.5437 7.56066 25.3249 7.34187C25.1061 7.12308 24.8093 7.00016 24.4999 7.00016Z" fill="white" />
//                             </svg>
//                         </span>
//                     </button>
//                 </div>
//             </div>
//         </div>

//     )
// }