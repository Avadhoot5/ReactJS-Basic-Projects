import { useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchAdd from "./components/SearchAdd";
import ContactDetail from "./components/ContactDetail";
import {db} from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const contactsRef = collection(db, "contacts");
      const contactsSnapShot = await getDocs(contactsRef);
      const contactsList = contactsSnapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setContacts(contactsList);
    }
    getContacts();
  }, [])

  return (
    <>
      <div className="max-w-[370px] mx-auto">
        <Navbar></Navbar>
        <SearchAdd></SearchAdd>
      </div>
      <ContactDetail contacts = {contacts}></ContactDetail>
    </>
  );
}

export default App;
