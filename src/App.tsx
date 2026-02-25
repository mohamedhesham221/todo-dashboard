import { Box, Stack } from '@mui/material'
import './App.css'
import AppHeader from "./components/AppHeader"
import Column from './components/Column'

function App() {
  
  return (
    <Box sx={{
      backgroundColor: "#f4f4f4",
      height: "100vh"
    }}>
      <AppHeader />
      <Stack direction="row" spacing={5} padding="15px" >
        <Column title='TO DO' tasksCounts={5} color='#0BA6DF'/>
        <Column title='IN Progress' tasksCounts={5} color='#FF9A00'/>
        <Column title='IN REVIEW' tasksCounts={5} color='#4D2D8C'/>
        <Column title='DONE' tasksCounts={5} color='#08CB00'/>
      </Stack>
    </Box>
  )
}

export default App
