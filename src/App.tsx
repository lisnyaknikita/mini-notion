import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Navigation from './components/navigation/Navigation';
import NotesPage from './pages/notes-page/NotesPage';
import TodosPage from './pages/todos-page/TodosPage';
import JournalingPage from './pages/journaling-page/JournalingPage';
import NotePage from './pages/note-page/NotePage';

import './assets/styles/global.scss';

import {useContext, useEffect} from 'react';

import { ThemeContext } from './providers/ThemeContext';

import clsx from 'clsx';

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={clsx('wrapper', !darkMode && 'light')}>
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
