import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../redux/actions';

const Search = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(searchActions(e.target.value));
  };
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search"
        aria-label="Search"
        onChange={handleSearch}
      />
      <InputGroup.Append>
        <Button variant="primary">
          <span className="fa fa-search" />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};

export default Search;
