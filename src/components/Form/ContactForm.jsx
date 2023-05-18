import { Formik } from 'formik';
import { CurrentForm, Input, Button, Label } from './ContactForm.styled';
import { useState } from 'react';

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    number: '',
  });

  const handleChange = ({ target: { name, value } }) => {
    setContactInfo({ [name]: value });
  };

  const handleSubmit = () => {
    formReset();
    // this.props.onSubmit(contactInfo.name, contactInfo.number);
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
          value={contactInfo.name}
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
          value={contactInfo.number}
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
