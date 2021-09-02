import React from "react";

function Modal({ closeHandler }) {
  const handleClose = () => {
    closeHandler((prev) => !prev);
  };
  return (
    <div
      className="flex flex-col space-y-4 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-75"
      onClick={handleClose}
    >
      <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none ml-1">
                Enter game code
              </div>
              <footer>
                <input className="mt-2 p-2 border-2 rounded-2xl" type="text" />
                <button className="flex-no-shrink bg-blue-700 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider text-white rounded-full">
                  Join
                </button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
