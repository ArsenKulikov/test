import React from 'react'
import Icon from '../../icons/close-circle-red.png';
import IconButton from '@material-ui/core/IconButton';

const Header = (props) => {
  return (
    <div style={{display: 'flex', border: "1px solid black", width: '400px'}}>
      <h2>{props.title}</h2>
      <IconButton>
        <img src={Icon} onClick={props.handleCloseModal} width="25" />
      </IconButton>
    </div>
  )
}

export default Header
