const initialState = {
  contacts: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    case 'UPDATE_CONTACT':
      const updateIndex = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      if (updateIndex !== -1) {
        const updatedContacts = [...state.contacts];
        updatedContacts[updateIndex] = action.payload;
        return {
          ...state,
          contacts: updatedContacts,
        };
      }
      return state;
    default:
      return state;
  }
};