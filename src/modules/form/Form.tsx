import React, {useState} from 'react';

import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme: any) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      display: "flex"
    }
  }
}));

function Form() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [all, setAll] = useState({name, surname, age, email, password});

    const classes = useStyles();
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off" 
       onSubmit={(e)=> {e.preventDefault(); setAll({name, surname, age, email, password});}}>
      <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=> setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Surname" variant="outlined" value={surname} onChange={(e)=> setSurname(e.target.value)}/>
      <TextField id="outlined-basic" label="Age" variant="outlined" value={age} onChange={(e)=> setAge(e.target.value)}/>
      <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e)=> setPassword(e.target.value)}/>
      <Button variant="contained" color="secondary" type="submit">
        Submit
      </Button>
      </form>
      <div>
        <pre>{JSON.stringify(all, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Form;
