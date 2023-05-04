import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  const [repo, setRepo] = useState('');

  const handleRepoChange = (event) => {
    setRepo(event.target.value);
  }

  async function makeChanges () {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: repo      
      })
    };
    try {
      fetch('http://localhost:3001/git', requestOptions)
        .then(res => res.json())
        .then(data => {
          console.log(data);
        })
    } catch (err) {
      console.log(`Error making changes: ${err}`);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        'align-items': 'center',
        'justify-content': 'center',
        'text-align': 'center',
        height: '100vh',
        '& > :not(style)': {
          m: 1
        },
      }}
    >
        <TextField id="outlined-basic" label="GitHub Repo" variant="outlined" onChange={handleRepoChange} />
        <Button variant="contained" onClick={makeChanges}>Change Code</Button>
    </Box>
  );
}

export default App;
