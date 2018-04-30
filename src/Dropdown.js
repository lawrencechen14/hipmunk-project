import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import Select from 'react-select';

class Dropdown extends React.Component {

  render() {
    return (
      <Select
          options={[1,2,3,4]}
          placeholder={'Select something'}
          clearable={false}
          style={
            {
              fontSize: 14,
              color: 'blue',
            }
          }
      />
    );
  }
}


export default Dropdown;
