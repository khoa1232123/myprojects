import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { openCreateForm } from '../../redux/actions';

const AddForm = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openCreateForm());
  };
  return (
    <>
      <Button style={{ width: '100%' }} onClick={handleClick}>
        Add <span className="fa fa-plus" />
      </Button>
    </>
  );
};

export default AddForm;
