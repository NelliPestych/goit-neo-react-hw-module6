import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    return (
        <div className={styles.contact}>
            <p>
                <strong>{name}</strong>
            </p>
            <p>{number}</p>
            <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </div>
    );
}

export default Contact;
