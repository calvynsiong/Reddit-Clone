import React, {useState} from 'react'
import { makeStyles, ThemeProvider, createMuiTheme, Paper, Button } from '@material-ui/core';
import {SideNav,Main,Content} from "./components"

const useStyles = makeStyles({
  resets: {
    height: "100%",
    paddingBottom: "4em"
  }
})


function App() {
  const classes = useStyles()
  const [darkMode, setDarkMode] = useState(false)
  const theme = createMuiTheme({ 
    palette: {
      type:darkMode?"dark":"light",
      primary: {
        light:"#ffaa10",
        main: "#FFA500",
        dark: "#c59d5f"
      },
      secondary: {
        light:"#ff9a00",
        main: "#FF4500",
        dark: "#ff7400"
      }
      
    }
    
  })
  return (
    <ThemeProvider theme={theme} >
      <Paper className={classes.resets}>
        <SideNav darkMode={darkMode} setDarkMode={setDarkMode}>
        </SideNav>
        <Main></Main>
        <Content></Content>
      </Paper>
      
    </ThemeProvider>
  )
}

export default App
