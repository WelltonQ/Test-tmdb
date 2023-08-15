import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router';
import { FilterProvider } from './contexts';

import './styles/global.scss'

function App() {

  return (
    <FilterProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </FilterProvider>
  )
}

export default App
