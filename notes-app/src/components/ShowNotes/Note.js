import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { checkedNote, deleteNote, openEditForm } from '../../redux/actions';

const Note = ({ item }) => {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(openEditForm(item));
  };
  const handleDel = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteNote(item.id));
    }
  };
  return (
    <Card className="item-note">
      <Card.Body>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id={item.id}
            checked={item.checked}
            onChange={() => dispatch(checkedNote(item.id))}
          />
          <label className="form-check-label" htmlFor={item.id}>
            {item.note}
          </label>
        </div>
        <div className="actions">
          <Button variant="warning" size="sm" onClick={handleEdit}>
            <i className="far fa-edit" />
          </Button>{' '}
          <Button variant="danger" size="sm" onClick={handleDel}>
            <i className="far fa-trash-alt" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Note;
