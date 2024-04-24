// pages/dialogues.js

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

const fetchDialogues = async () => {
  const response = await fetch('https://wordsapi-nkj3.onrender.com/dialogues');
  const data = await response.json();
  return data;
};

const DialoguesPage = () => {
  const [dialogues, setDialogues] = useState([]);


  useEffect(() => {
    const fetchDialoguesData = async () => {
      const data = await fetchDialogues();
      setDialogues(data);
      console.log(data,'data')
    };
    fetchDialoguesData();
  }, []);

  return (
    <>
    <Navbar></Navbar>
      <div>
        <h1>Dialogues</h1>
        <ul>
        {dialogues.map((dialogue, index) => (
              <li key={index}>{dialogue.text} - {dialogue.character}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default DialoguesPage;
