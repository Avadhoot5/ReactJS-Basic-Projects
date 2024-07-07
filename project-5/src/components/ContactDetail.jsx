import { collection, deleteDoc, doc} from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi2"; 
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";
import {db} from "../config/firebase";
import AddandUpdateContact from './AddandUpdateContact';
import useDisclouse from "../hooks/useDisclouse";
import { toast } from "react-toastify";
import NoContactFound from "./NoContactFound";

function ContactDetail({contacts}) {

    const deleteContact = async (id) => {
        try {
            await deleteDoc(doc(db, "contacts", id));
            toast.success("Contact Deleted Sucessfully");
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className="flex flex-col gap-4 m-4">
        {contacts.length <= 0 ? <NoContactFound/> : contacts.map((contact) => {
            return (
                <ContactCard deleteContact={deleteContact} key={contact.id} contact={contact}></ContactCard>
            )
        })}
    </div>
  )
}

function ContactCard({contact, deleteContact}) {
  const {isOpen, onClose, onOpen} = useDisclouse();

    return (
        <div className="flex justify-between items-center pd-2 
            w-[370px] rounded-lg m-auto bg-yellow">
            <div className="flex gap-1 items-center">
                <HiOutlineUserCircle className="text-4xl text-orange"/>
                <div className=""> 
                    <h2 className="font-medium font">{contact.name}</h2>
                    <p className="text-small">{contact.email}</p>
                </div>
                </div>
            <div className="flex justify-end items-end w-full">
                <RiEditCircleLine onClick={onOpen} className="cursor-pointer text-4xl"/>
                <IoMdTrash onClick={() => deleteContact(contact.id)} className="cursor-pointer text-4xl text-purple-500"/>
            </div>
            <AddandUpdateContact contact = {contact} isUpdate = {true} isOpen={isOpen} onClose={onClose}/>
        </div>        
    )
}

export default ContactDetail;