import { Formik } from 'formik';
import { CurrentForm, Input, Button, Label } from './ContactForm.styled';
import { useState } from 'react';

const ContactForm = ({ onFormSubmit }) => {
  const [contactInfo, setContactInfo] = useState({
    contactName: '',
    contactNumber: '',
  });

  const handleChange = e => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    formReset();
    onFormSubmit(contactInfo.contactName, contactInfo.contactNumber);
  };

  const formReset = () => {
    setContactInfo({
      name: '',
      number: '',
    });
  };

  return (
    <Formik initialValues={contactInfo} onSubmit={handleSubmit}>
      <CurrentForm>
        <Label htmlFor="contactName">Name</Label>
        <Input
          type="text"
          name="contactName"
          id="name"
          onChange={handleChange}
          value={contactInfo.contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <Label htmlFor="contactNumber">Number</Label>
        <Input
          type="tel"
          name="contactNumber"
          id="number"
          onChange={handleChange}
          value={contactInfo.contactNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <Button type="submit">Add to contact</Button>
      </CurrentForm>
    </Formik>
  );
};
export default ContactForm;
