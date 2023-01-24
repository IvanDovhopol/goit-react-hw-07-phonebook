import { deletedToast } from 'constans/utils';

export const fetchContactsFulfilled = (state, action) => {
  state.items = action.payload;
};

export const addContactFulfilled = (state, action) => {
  state.items.push(action.payload);
};

export const deleteContactFulfilled = (state, action) => {
  const index = state.items.findIndex(contact => contact.id === action.payload);
  state.items.splice(index, 1);
  deletedToast();
};

export const anyPending = state => {
  state.isLoading = true;
};

export const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const anyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
