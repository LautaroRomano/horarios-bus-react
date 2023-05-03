import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route exact path="/" element={<ExprebusPage />} />
          <Route exact path="/exprebus" element={<Home />} />
          <Route exact path="/tesa" element={<TesaPage />} />
          <Route exact path="/recorridos" element={<RecorridosPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
