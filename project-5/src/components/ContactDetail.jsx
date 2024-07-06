import { HiOutlineUserCircle } from "react-icons/hi2"; 
import {IoMdTrash} from "react-icons/io";
import {RiEditCircleLine} from "react-icons/ri";


function ContactDetail({contacts}) {
  return (
    <div>
        {contacts.map((contact) => {
            return (
                <div key = {contact.id} className="flex justify-around items-center pd-2 rounded-log bg-yellow">
                    <div className="flex gap-3">
                        <HiOutlineUserCircle className="text-4xl text-orange"/>
                        <div className=""> 
                            <h2 className="">{contact.name}</h2>
                            <p className="">{contact.email}</p>
                        </div>
                        </div>
                    <div className="flex ">
                        <IoMdTrash/>
                        <RiEditCircleLine/>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ContactDetail;