import React,{useState} from "react";


export default function Modal() {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      {showModal ? (
          <>
          <div
            className="justify-center motion-safe:animate-pulse items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative my-6 mx-auto w-64 md:w-80 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <p className="my-4 font-bold md:font-extrabold text-green-500 text-sm md:text-lg leading-relaxed text-center">
                  Registration was successful
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white bg-red-500 rounded-lg font-bold uppercase p-2 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}