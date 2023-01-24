import { useSelector, useDispatch } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { Btn } from 'components/App/App.styled';
import { Table, Heading, Row, Body, Notification } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteContact(id));
  }

  return (
    <div>
      {contacts.length > 0 && !error && (
        <Table>
          <thead>
            <tr>
              <Heading>Name</Heading>
              <Heading>Number</Heading>
            </tr>
          </thead>

          <tbody>
            {contacts.map(({ id, name, phone }) => (
              <Row key={id}>
                <Body>{name}</Body>
                <Body>{phone}</Body>
                <Body>
                  <Btn type="button" onClick={() => handleDelete(id)}>
                    Delete
                  </Btn>
                </Body>
              </Row>
            ))}
          </tbody>
        </Table>
      )}
      {!isLoading && contacts.length === 0 && (
        <Notification>Contact not found 🤔</Notification>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
