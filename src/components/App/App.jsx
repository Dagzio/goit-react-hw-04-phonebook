import { useState, useEffect } from 'react';
import ContactForm from '../Form/ContactForm';
import Container from './App.styled';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contactList')) ?? [];
  });
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contactList');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify([...contacts]));
  }, [contacts]);

  const addContact = () => {
    const {
      contactInfo: { name, number },
    } = ContactForm;
    const duplicateName = contacts.find(contact => contact.name === name);
    if (duplicateName) {
      alert(duplicateName.name + ' is already in your contacts');
      return;
    }
    setContacts(prev => [...prev, { id: nanoid(), name, number }]);
  };

  const deleteContact = id => {
    const filterValueId = contacts.filter(contact => contact.id !== id);
    setContacts([...filterValueId]);
  };

  const onChangeFilter = ({ target: { value } }) => {
    setFilterValue(value);
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter onChange={onChangeFilter} value={filterValue} />
        <Contacts
          contacts={contacts}
          onClick={deleteContact}
          filterValue={filterValue}
        />
      </Section>
    </Container>
  );
};

export default App;
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
