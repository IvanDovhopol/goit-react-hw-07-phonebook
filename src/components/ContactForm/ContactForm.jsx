import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { addToast, errorToast } from 'constans/utils';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  TextError,
  StyledForm,
  Input,
  Label,
  Button,
} from './ContactForm.styled';

const schema = Yup.object({
  name: Yup.string().required(),
  number: Yup.string().required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const handleSubmit = ({ name, number }, { resetForm }) => {
    if (contacts.some(e => e.name === name)) {
      resetForm();
      return errorToast();
    }

    const value = {
      name,
      phone: number,
    };

    dispatch(addContact({ ...value }));
    resetForm();
    addToast(name);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <>
        <StyledForm>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              placeholder="Enter contact name..."
            />
            <TextError name="name" component="div" />
          </Label>

          <Label>
            Number
            <Input type="tel" name="number" placeholder="111-111..." />
            <TextError name="number" component="div" />
          </Label>

          <Button type="sumbit">
            {isLoading && !error ? 'loading ...' : 'Add contact'}
          </Button>
        </StyledForm>
      </>
    </Formik>
  );
};
