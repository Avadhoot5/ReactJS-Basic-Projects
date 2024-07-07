import {AiOutlineClose} from 'react-icons/ai';
import {createPortal} from 'react-dom';


function Modal({onClose, isOpen, children}) {
    return createPortal(isOpen && 
    <>
    <div>
        <div className='relative z-50 min-h-[270px] max-w-[370px] m-auto p-4 bg-white'>
            <div className='flex justify-end'>
                <AiOutlineClose className='text-2xl' onClick={onClose}/>
            </div>
            {children}
        </div>
    </div>
    <div className='absolute z-40 h-screen w-screen bottom-0 left-0 backdrop-blur' />
    </>, document.getElementById("modal-root"))
}


export default Modal;

