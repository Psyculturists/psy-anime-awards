import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../../index.css'

import Header from '../../Header.jsx'
import Body from '../../Body.jsx'
import Partners from './Partners.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body content={<Partners/>}/>
  </StrictMode>,
)
