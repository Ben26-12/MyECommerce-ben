import { ToastContainer, Zoom } from "react-toastify";

function ToastProvider({ children }) {
  return (
    <>
      <ToastContainer
        autoClose={3000}
        transition={Zoom}
        draggable
        pauseOnHover={false}
      />
      {children}
    </>
  );
}

export default ToastProvider;
