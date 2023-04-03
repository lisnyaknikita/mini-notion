import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';
import NotesPage from './pages/notes-page/NotesPage';
import TodosPage from './pages/todos-page/TodosPage';
import JournalingPage from './pages/journaling-page/JournalingPage';

import './assets/styles/global.scss';

function App() {
  return (
    <div className='wrapper'>
      <Navigation />
      <div className='inner'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<NotesPage />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/journaling' element={<JournalingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
