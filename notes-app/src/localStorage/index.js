export const getNoteData = () => {
  const data = localStorage.getItem('notes')
    ? JSON.parse(localStorage.getItem('notes'))
    : [];
  return data;
};

export const setNoteData = (data) => {
  localStorage.setItem('notes', JSON.stringify(data));
};
