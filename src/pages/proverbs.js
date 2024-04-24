// pages/proverbs.js

import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

const fetchProverbs = async () => {
  const response = await fetch('https://wordsapi-nkj3.onrender.com/proverbs');
  const data = await response.json();
  return data;
};

const ProverbsPage = () => {
  const [proverbs, setProverbs] = useState([]);

  useEffect(() => {
    const fetchProverbsData = async () => {
      const data = await fetchProverbs();
      setProverbs(data);
    };
    fetchProverbsData();
  }, []);

 
  return (
    <>
    <Navbar></Navbar>
      <div>
        <h1>Proverbs</h1>
        <ul>
            {proverbs.map((proverb, index) => (
              <li key={index}>{proverb.text} - {proverb.author}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ProverbsPage;
