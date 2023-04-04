import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';
import NotesPage from './pages/notes-page/NotesPage';
import TodosPage from './pages/todos-page/TodosPage';
import JournalingPage from './pages/journaling-page/JournalingPage';

import './assets/styles/global.scss';
import NotePage from './pages/note-page/NotePage';

function App() {
  return (
    <div className='wrapper'>
      <div className='navigation'>
        <Navigation />
      </div>
      <div className='inner'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes' element={<NotesPage />} />
          <Route path='/notes/:id' element={<NotePage />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/journaling' element={<JournalingPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
