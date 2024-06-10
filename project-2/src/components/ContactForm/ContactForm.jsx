import styles from "./ContactForm.module.css"
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

function ContactForm() {

    const onSubmit = (e) => {
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
    }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");


  return (
    <section className={`${styles.container}`}>
        <div className={styles.contact_form}>
            <div className={styles.chat_call_bttn}>
                <Button text = "VIA SUPPORT CHAT" icon = {<MdMessage style={{fontSize:"24px"}}/>}/>
                <Button text = "VIA CALL" icon = {<FaPhone style={{fontSize:"24px"}}/>}/>
            </div>
                <Button isOutline={true} text = "VIA EMAIL FORM" icon = {<MdEmail style={{fontSize:"24px"}}/>}/>
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"/>  
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"/>  
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows={7}/>
                    </div>
                    <div className={styles.submit_btn}>
                        <Button text="SUBMIT"/>
                    </div>
                    <div>
                        {name + " " + email + " " + text}
                    </div>
                </form>
        </div>

        <div className={styles.contact_image}>
            <img src="../images/contact.svg" alt="contact-image" />
        </div>

    </section>
  )
}


export default ContactForm;