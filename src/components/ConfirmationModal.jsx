import React from "react";
import Swal from "sweetalert2";

const ConfirmationModal = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        color: "white",
        showConfirmButton: false,
        timer: 3000,
        background: 'gray',
        timerProgressBar: false,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'success',
        title: 'Success',
      })
return(
    <div className=".ConfirmationModal">
        <button onClick={ConfirmationModal} />
    </div>
    );
};
export default ConfirmationModal;