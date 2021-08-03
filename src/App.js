import { Container, createMuiTheme, Switch, ThemeProvider, withStyles } from '@material-ui/core'
import { grey, purple } from '@material-ui/core/colors'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Definitions from './components/Definitions/Definitions'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#fefefe',
      },
      secondary: purple,
   },
   typography: {
      fontFamily: 'Rajdhani',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
   },
})

const App = () => {
   const [word, setWord] = useState('')
   const [meanings, setMeanings] = useState([])
   const [category, setCategory] = useState('en')
   const [LightTheme, setLightTheme] = useState(false)

   const dictionaryApi = async () => {
      try {
         const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
         setMeanings(data.data)
      } catch (error) {
         console.log(error)
      }
   }

   console.log(meanings)

   useEffect(() => {
      dictionaryApi()
      // eslint-disable-next-line
   }, [word, category])

   const PurpleSwitch = withStyles({
      switchBase: {
         color: grey[50],
         '&$checked': {
            color: grey[900],
         },
         '&$checked + $track': {
            backgroundColor: grey[500],
         },
      },
      checked: {},
      track: {},
   })(Switch)

   return (
      <ThemeProvider theme={theme}>
         <div
            className='App'
            style={{
               height: '100vh',
               backgroundColor: LightTheme ? '#fff' : '#ad0505',
               color: LightTheme ? 'black' : 'white',
               transition: 'all 0.5s linear',
            }}
         >
            <Container
               maxWidth='md'
               style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100vh',
                  justifyContent: 'space-evenly',
               }}
            >
               <div style={{ position: 'absolute', top: 0, right: 15, paddingTop: 10 }}>
                  <span>{LightTheme ? 'Dark' : 'Light'} Mode</span>
                  <PurpleSwitch checked={LightTheme} onChange={() => setLightTheme(!LightTheme)} />
               </div>
               <Header
                  setWord={setWord}
                  category={category}
                  setCategory={setCategory}
                  word={word}
                  setMeanings={setMeanings}
                  LightTheme={LightTheme}
               />
               {meanings && <Definitions meanings={meanings} word={word} LightTheme={LightTheme} category={category} />}
            </Container>
            <Footer />
         </div>
      </ThemeProvider>
   )
}

export default App
