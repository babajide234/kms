import { IoClose } from "react-icons/io5";
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={onClose}
        ></div>

        <div className="bg-white p-4 max-w-md md:min-w-[600px] rounded-lg mx-auto z-10">
          <button
            className="absolute top-4 right-4 text-white text-6xl hover:text-gray-800"
            onClick={onClose}
          >
            <IoClose />
          </button>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
