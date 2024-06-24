import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { selectContacts, deleteContact } from "../../redux/contactsSlice";

import css from "./ContactList.module.css";

import Contact from "../Contact/Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter(
    (contact) =>
      typeof contact.name === "string" &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          item={contact}
          onDeleteContact={() => handleDeleteContact(contact.id)}
        />
      ))}
    </ul>
  );
};

export default ContactList;
