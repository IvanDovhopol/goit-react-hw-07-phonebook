import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { fetchContacts } from 'redux/operations';
import { Toaster } from 'react-hot-toast';
import { FcContacts } from 'react-icons/fc';
import { Logo } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box p={5}>
      <Logo>
        Phonebook <FcContacts size="50" />
      </Logo>
      <ContactForm />
      <Filter />
      <ContactList />
      <Toaster />
    </Box>
  );
};
