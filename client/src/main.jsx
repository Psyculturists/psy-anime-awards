import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './Body.jsx'
import Header from './Header.jsx'
import Categories from './Categories.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body content={<Categories/>}/>
  </StrictMode>,
)
