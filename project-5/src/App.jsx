import { useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchAdd from "./components/SearchAdd";
import ContactDetail from "./components/ContactDetail";
import AddandUpdateContact from "./components/AddandUpdateContact";
import {db} from "./config/firebase";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import useDisclouse from "./hooks/useDisclouse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const [contacts, setContacts] = useState([]);
  const [filterContact, setFilterContact] = useState([]);
  const {isOpen, onClose, onOpen} = useDisclouse();


  useEffect(() => {
    
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactsList = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
          }));
          setContacts(contactsList);
          setFilterContact(contactsList); 
        })
    }
    catch (error) {
      console.log(error.message);
    }
  }
   getContacts(); 
  }, []);


  const filterContacts = (e) => {
    const contactValue = e.target.value.toLowerCase();
    const filtered = contacts.filter((contact) => 
      contact.name.toLowerCase().includes(contactValue)
    );
    setFilterContact(filtered);
  }

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar></Navbar>
        <SearchAdd filterContacts={filterContacts} onOpen = {onOpen}></SearchAdd>
      </div>
      <ContactDetail contacts = {filterContact}></ContactDetail>
      <AddandUpdateContact isOpen={isOpen} onClose={onClose}/>
      <ToastContainer position="bottom-center"/>
    </>
  );
}


export default App;
