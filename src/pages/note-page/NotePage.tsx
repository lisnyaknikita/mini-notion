import { FC, useContext, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { modules } from './Editor.modules';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { BsPencil } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

import {
  useGetNoteByIdQuery,
  useUpdateNoteTextMutation,
  useUpdateNoteTitleMutation,
} from '../../store/api/notes.api';

import ModalForm from '../../ui/modal-form/ModalForm';
import Tooltip from '@mui/material/Tooltip';

import classes from './NotePage.module.scss';

import clsx from 'clsx';

import { ThemeContext } from '../../providers/ThemeContext';

const NotePage: FC = () => {
  const { darkMode } = useContext(ThemeContext);

  const params = useParams();
  //@ts-ignore
  const { data, isError } = useGetNoteByIdQuery<any>(params?.id);
  const [updateNoteText, {}] = useUpdateNoteTextMutation();
  const [updateNoteTitle, { isLoading: isTitleLoading }] =
    useUpdateNoteTitleMutation();

  const [value, setValue] = useState(data?.text);
  const [newTitle, setNewTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const firstInputRef = useRef<HTMLInputElement>(null);

  const updateTitleHandler = (e: React.FormEvent) => {
    e.preventDefault();
    updateNoteTitle({ ...data, title: newTitle });
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <div className={classes.inner}>
      {isError && <h2 style={{ color: 'red' }}>Error!</h2>}
      <div className={classes.noteBg}>
        <img
          src={
            data?.bgUrl
              ? data?.bgUrl
              : 'https://goreg.com/wp-content/uploads/2014/04/bokeh-cover-bg.jpg'
          }
          alt='note background'
        />
      </div>
      {isModalOpen && (
        <ModalForm>
          <button
            className={clsx(classes.closeBtn, !darkMode && 'light')}
            onClick={() => setIsModalOpen(false)}
          >
            <IoMdClose />
          </button>
          <form
            className={clsx(classes.updateTitleModal, !darkMode && 'light')}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <input
              type='text'
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder='Enter the new title...'
              ref={firstInputRef}
            />
            <button onClick={updateTitleHandler}>Update</button>
          </form>
        </ModalForm>
      )}
      <div className={clsx(classes.noteTitle, !darkMode && 'light')}>
        <h2>{isTitleLoading ? <h3>Loading...</h3> : data?.title}</h2>
        <Tooltip title='Edit title'>
          <button
            className={clsx(classes.editTitleBtn, !darkMode && 'light')}
            onClick={() => setIsModalOpen(true)}
          >
            <BsPencil />
          </button>
        </Tooltip>
      </div>
      <div className={classes.noteEditor}>
        <ReactQuill
          theme='snow'
          modules={modules}
          value={value ? value : '<h1>Go back to this page</h1>'}
          onChange={setValue}
        />
      </div>
      <Tooltip title='Update the note text'>
        <button
          className={clsx(classes.updateBtn, !darkMode && 'light')}
          onClick={() => updateNoteText({ ...data, text: value })}
        >
          Update
        </button>
      </Tooltip>
    </div>
  );
};

export default NotePage;
