import React, {useEffect} from 'react'

 const UseOutsideAlerter = (ref, setAddPop, addPopup) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setAddPop(!addPopup)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  
  export default UseOutsideAlerter