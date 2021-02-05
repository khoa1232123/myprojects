import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../../redux/actions';
import Note from './Note';

const ShowNotes = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <Row>
      {notes &&
        notes.map((item) => (
          <Col xs={12} key={item.id} style={{ marginBottom: '15px' }}>
            <Note item={item} />
          </Col>
        ))}
    </Row>
  );
};

export default ShowNotes;
