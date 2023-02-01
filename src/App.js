import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Recommend from './components/Recommend';
import SearchPage from './components/SearchPage';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/search/:searchTerm' element={
            <>
            <div className='app_page'>
              <Sidebar />
              <SearchPage/>
            </div >
          </>
          } />
          <Route path="/" element={
            <>
              <div className='app_page'>
                <Sidebar />
                <Recommend />
              </div >
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
