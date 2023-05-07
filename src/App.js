import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ExprebusPage from './components/exprebus/ExprebusPage';
import TesaPage from './components/tesa/TesaPage';
import RecorridosPage from './components/recorridos/RecorridosPage';
import Home from './components/home/Home';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/exprebus" element={<ExprebusPage />} />
          <Route path="/tesa" element={<TesaPage />} />
          <Route path="/recorridos" element={<RecorridosPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
