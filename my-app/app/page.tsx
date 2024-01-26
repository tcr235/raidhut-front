'use client';

import { Card, CardContent, Button, Grid, Typography, Link } from '@material-ui/core';

export default function Page() {
  return (
        <Grid container justifyContent='center' alignItems="center" style={{ height: '90vh' }}>
          <Card>
            <CardContent>
              <Typography align='center' variant='h4' style={{marginBottom: '10px'}}>Página inicial</Typography>
              <Link href="/entrar">
                <Button variant="contained" color="primary" style={{ margin: '10px' }}>
                  Login
                </Button>
              </Link>
              <Link href="/cadastrar">
                <Button variant="contained" color="secondary" style={{ margin: '10px' }}>
                  Cadastro
                </Button>
              </Link>
              <Button variant="contained" style={{ margin: '10px' }}>
                Histórico da conta
              </Button>
            </CardContent>
          </Card>
        </Grid>
      );

    }