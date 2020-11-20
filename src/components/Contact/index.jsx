import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function Contact(){
return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <FormControl>
            <InputLabel style={{ color: 'white' }} htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
            <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        </FormControl>
      </Container>
    </React.Fragment>
  );
    
}

