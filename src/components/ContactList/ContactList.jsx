// ContactList.jsx
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    // Фільтрація контактів
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={styles.contactList}>
            {filteredContacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} name={name} number={number} />
            ))}
        </div>
    );
}

export default ContactList;

