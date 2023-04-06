import {
  ChangeEvent,
  ChangeEventHandler,
  FC,
  FormEvent,
  useEffect,
  useState,
} from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import classes from './NotePage.module.scss';
import { useParams } from 'react-router-dom';
import {
  useGetNoteByIdQuery,
  useUpdateNoteMutation,
} from '../../store/api/notes.api';

const NotePage: FC = () => {
  const params = useParams();

  //@ts-ignore
  const { data, isLoading, isError } = useGetNoteByIdQuery(params?.id);
  const [updateNote, {}] = useUpdateNoteMutation();

  const [value, setValue] = useState(data?.text);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      ['link', 'image'],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ direction: 'rtl' }],
      [{ align: [] }],
    ],
  };

  return (
    <div className={classes.inner}>
      {isError && <h2>Error!</h2>}
      <div className={classes.noteBg}>
        <img src={data?.bgUrl} alt='note background' />
      </div>
      <h2 className={classes.noteTitle}>{data?.title}</h2>
      <div className={classes.noteEditor}>
        <ReactQuill
          theme='snow'
          modules={modules}
          value={value}
          onChange={setValue}
        />
      </div>
      <button
      // onClick={() => updateNote()}
      >
        Update
      </button>
    </div>
  );
};

export default NotePage;
