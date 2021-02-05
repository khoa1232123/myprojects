import React, { useEffect, useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeForm, createNote, editNote } from '../../redux/actions';

const ModalForm = () => {
  const { showForm, currentNote } = useSelector((state) => state.notes);
  const [value, setValue] = useState(currentNote ? currentNote.note : '');
  useEffect(() => {
    if (currentNote) {
      setValue(currentNote.note);
    }
  }, [currentNote]);
  const handleClose = () => {
    setValue('');
    dispatch(closeForm());
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentNote.id) {
      dispatch(editNote({ id: currentNote.id, note: value }));
    } else {
      dispatch(createNote(value));
    }
    setValue('');
    dispatch(closeForm());
  };

  return (
    <Modal show={showForm} onHide={handleClose}>
      <form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentNote.id ? 'Edit Note' : 'Create New Note'}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            placeholder="Note..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ModalForm;
