import React from 'react';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Icon from '../../icons/close-circle-red.png';
import './InputGroup.css'
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';



const InputGroup = (props) => {
  return (
    <div className='InputGroup'>
      <Select
        value={props.option} 
        onChange={props.onSelectChange}
        name={`${props.id}`}
        style={{marginLeft: '10px', marginRight: '10px', width: '100px'}}>
        <MenuItem value={'Twin'}>Twin</MenuItem>
        <MenuItem value={'Tripple'}>Tripple</MenuItem>
        <MenuItem value={'Quadro'}>Quadro</MenuItem>
      </Select>
      <Input 
        name={`${props.id}`}
        type="number"
        onChange={props.onValueChange}
        style={{marginLeft: '10px', marginRight: '10px', width: '40px'}}
        value={props.value}/>
      <IconButton>
        <img src={Icon} name={`${props.id}`} onClick={props.onRemove} alt='Удалить' width="20" />
      </IconButton>
           
    </div>
  )
}

export default InputGroup;