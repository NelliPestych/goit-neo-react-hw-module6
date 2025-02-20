import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import styles from "./App.module.css";

function App() {
    const [contacts, setContacts] = useState(() => {
        const savedContacts = localStorage.getItem("contacts");
        return savedContacts ? JSON.parse(savedContacts) : [
            { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
            { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
            { id: "id-3", name: "Eden Clements", number: "645-17-79" },
            { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
    });

    const [filter, setFilter] = useState("");

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (name, number) => {
        const newContact = { id: nanoid(), name, number };
        setContacts((prev) => [...prev, newContact]);
    };

    const deleteContact = (id) => {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
    };

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={styles.app}>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact} />
            <SearchBox filter={filter} setFilter={setFilter} />
            <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
        </div>
    );
}

export default App;
