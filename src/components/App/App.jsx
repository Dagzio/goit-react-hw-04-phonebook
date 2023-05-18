import { useState, useEffect } from "react";
import {ContactForm} from "../Form/ContactForm";
import Container from "./App.styled";
import Section from "components/Section/Section";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";
import { nanoid } from "nanoid";


const App = ()=> {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
  ]);
  const [filterValue, setFilterValue] = useState('');

  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify([...contacts]));
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts)
    if (parsedContacts) {
      setContacts({
      contacts: [...savedContacts]
    })
    
    };
  }, [contacts])
 

  // useEffect(()=>{
    
  // },[])

  // componentDidUpdate(prevProps, prevState) {



  //   if (this.state.contacts !== prevState.contacts) {
      
  //   };

  // };

   const formSubmitHandler = (name, number) => {
    const duplicateName = contacts.find(
      contact => contact.name === name
    );
    if (duplicateName) {
      alert(duplicateName.name+' is already in contacts');
      return;
    }
    setContacts({
      contacts: [...contacts, { id: nanoid(), name, number }],
    });
  };
  


  const deleteContact = id => {
    const filterId = contacts.filter(contact => contact.id !== id);
    setContacts({ contacts: [...filterId] });
  };

  const onChangeFilter = event => {
    setFilterValue({
      filter: event.currentTarget.value,
    });
  };
  

    return <Container>
      <Section title="Phonebook">
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>

      <Section title="Contacts">
        <Filter onChange={onChangeFilter } value={filterValue} />
        <Contacts contacts={contacts} onClick={ deleteContact} filter={filterValue} />
      </Section>
      </Container>
    

};

export default App;
// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }