'use client';

import Swal from 'sweetalert2';

export default function SweetAlertPage() {
  const handleAlert = () => {
    Swal.fire({
      text: 'Are you sure you want to delete this tenant?',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      cancelButtonText: 'No',
    }).then((result) => {
      console.log(result);
    });
  };

  const handleToast = () => {
    Swal.fire({
      toast: true,
      position: 'top-right',
      icon: 'success',
      title: 'Success',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col gap-4">
        <button onClick={handleAlert}>alert</button>
        <button onClick={handleToast}>toast</button>
      </div>
    </div>
  );
}
