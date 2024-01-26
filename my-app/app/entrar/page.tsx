"use client";
import { FormEvent } from 'react';
import { Button, TextField, Grid, Card, CardContent } from '@material-ui/core';
import { useRouter } from 'next/navigation';
import api from '@/service/api.service';

export default function LoginForm() {
  const { push } = useRouter();

  const loginUser = async (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const res = await api.post('http://localhost:3030/auth/sign-in', {
      username: (form.elements.namedItem('username') as HTMLInputElement).value,
      password: (form.elements.namedItem('password') as HTMLInputElement).value,
    });

    if (res.status === 200) {
      push('/');
    }
  }

  return (
    <Grid container justifyContent='center' alignItems="center" style={{ height: '90vh' }}>
      <Card>
        <CardContent>
          <h1 style={{textAlign: 'center'}}>Login</h1>
          <form onSubmit={loginUser}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
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
              style={{ margin: '10px' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: '10px' }}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}