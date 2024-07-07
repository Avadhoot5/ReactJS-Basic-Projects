import { useState } from "react";

function useDisclouse() {

    const [isOpen, setisOpen] = useState(false);

    const onOpen = () => {
      setisOpen(true);
    }
  
    const onClose = () => {
      setisOpen(false);
    }
  

  return {isOpen, onClose, onOpen}
}

export default useDisclouse;