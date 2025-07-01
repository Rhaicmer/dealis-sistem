import { useState } from 'react';
import { TextField, Button, Box, Typography, Paper } from '@mui/material';
import VideoBg from '../../Components/VideoBG/VideoBg.jsx';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Validação simples
    if (!email || !senha) {
      alert('Preencha todos os campos!');
      return;
    }

    // Aqui você pode colocar sua lógica de autenticação
    console.log('Login:', email, senha);
    alert('Login realizado (simulação)');
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <VideoBg />

      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 3,
            minWidth: 320,
            backdropFilter: 'blur(6px)',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" fontWeight="bold">
            Bem-vindo
          </Typography>

          <TextField
            fullWidth
            label="Email ou Usuário"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            label="Senha"
            type="password"
            variant="outlined"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
            sx={{ marginTop: 1 }}
          >
            Entrar
          </Button>
        </Paper>
      </Box>
    </div>
  );
}

export default Login;
