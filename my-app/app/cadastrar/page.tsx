"use client";
import axios from 'axios';
import { FormEvent, useState } from 'react';
import { Button, TextField, Grid, Card, CardContent } from '@material-ui/core';
import { useRouter } from 'next/navigation';

export default function RegistrationForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { push } = useRouter();

  const registerUser = async (event: FormEvent) => {
    event.preventDefault();

    const res = await axios.post('http://localhost:3030/auth/sign-up', {
      firstName,
      lastName,
      email,
      password,
    });

    if (res.status === 200) {
        push('/');
      }

  }

  return (
    <Grid container justifyContent='center' alignItems="center" style={{ height: '90vh' }}>
      <Card>
        <CardContent>
          <h1>Cadastro</h1>
          <form onSubmit={registerUser}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ margin: '10px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ margin: '10px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ margin: '10px' }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ margin: '10px' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '10px' }}
            >
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}