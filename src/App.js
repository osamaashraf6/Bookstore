import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/nav';
import Home from './pages/Home';
import Book from './pages/Book';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="book" element={<Book />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
