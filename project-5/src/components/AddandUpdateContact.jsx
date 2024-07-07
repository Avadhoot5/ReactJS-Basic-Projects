import Modal from "./Modal";
import {ErrorMessage, Field, Formik, Form} from "Formik";
import {db} from "../config/firebase";
import { addDoc, collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
    name: Yup.string().required("Please add name"),
    email:  Yup.string().email().required("Invalid Email")
})

function AddandUpdateContact( {isOpen, onClose, isUpdate, contact}) {

    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, "contacts");
            await addDoc(contactRef, contact);
            onClose();
            toast.success("Contact Added Successfully");
        } catch (error) {
            console.log(error);
        }
    }

    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            onClose();
            toast.success("Contact Updated Successfully");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose} >
        <Formik validationSchema={contactSchemaValidation} 
        initialValues={isUpdate ? {
            name: contact.name,
            email: contact.email
        }:{
            name: "",
            email: ""
        }}
        onSubmit={(values) => {
            isUpdate ? updateContact(values, contact.id) : addContact(values);
        }}
        >
            <Form className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label>
                    <Field name = "name" className="border-2 pd-1"></Field>
                    <div className="text-xs text-red-500">
                        <ErrorMessage name="name"/>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <Field type = "email" name="email" className="border-2 pd-1"></Field>
                    <div className="text-xs text-red-500">
                        <ErrorMessage name="email"/>
                    </div>
                </div>
                <button className="bg-orange px-3 py-1.5 border self-end rounded-xl">
                    {isUpdate ? "Update":"Add"} Contact
                </button>
            </Form>
        </Formik>
        </Modal>
    </div>
  )
}

export default AddandUpdateContact;