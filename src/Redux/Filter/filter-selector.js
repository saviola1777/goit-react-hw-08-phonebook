export const getFilter = store => store.filter;

export const getfiteredContacts = (filter, contacts) => {
  const normalizedFilter = filter.toLocaleLowerCase().trim();
  return contacts.filter(({ name }) => {
     return (name.toLocaleLowerCase().includes(normalizedFilter))
   })
  }
