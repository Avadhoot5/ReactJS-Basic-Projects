import styles from "./Button.module.css"
import { MdMessage } from "react-icons/md";

function Button({isOutline, icon, text, ...rest}) {
  return (
    <>
    <button {...rest} className={isOutline ? styles.secondary_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
    </>
  )
}

export default Button;