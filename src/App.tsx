import React from 'react';

import './App.css';
import { ContactList } from './components/ContactList';
import { useApi } from './hooks/useApi';
import { createTheme,Stack, ThemeProvider, Typography } from '@mui/material';
import CircularStatic from './components/Loading/LoadingSpinner';

function App() {
const theme = createTheme({
  palette:{
    mode: "dark"
  }
})
const {data, loading, error, fetchContact} = useApi()

React.useEffect(() => {
  fetchContact()
}, []
)

  return (
    <ThemeProvider theme={theme}>
      <Stack direction = {{xs: "column", md: "row"}} mt = {2}flexWrap= {"wrap"} gap={2} justifyContent={"center"} alignItems={"center"}
      //to write css in mui
       sx={{
        textDecoration: "underline"
      }}
      >
        
        {data?.map((item)=>(
          <ContactList 
          key = {item.id}
          item = {item} />
        ))}
        {loading && <CircularStatic/>}
        {error && <Typography>asdasd</Typography>}
       
        
    </Stack>
      </ThemeProvider>
  );
}

export default App;
