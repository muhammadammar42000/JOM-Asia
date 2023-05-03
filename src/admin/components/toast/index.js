import React, {useEffect} from 'react'
import { toast } from "react-toastify";


export const SuccessToast = (msg) => {

    toast.success(msg, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
}

 