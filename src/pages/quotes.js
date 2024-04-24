import { useEffect, useState } from 'react';

import './global.css'
import Navbar from '@/components/Navbar';

const QuotesPage = () => {

    const [quotes, setQuotes] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [filteredQuotes, setFilteredQuotes] = useState([]);


    const fetchQuotes = async () => {
        const response = await fetch('https://wordsapi-nkj3.onrender.com/quotes');
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        const fetchQuotesData = async () => {
            const data = await fetchQuotes();
            setQuotes(data.quotes);
            setAuthors(data.authors)
        };
        fetchQuotesData();
    }, []);

    const filterQuotesByAuthor = (author) => {
        if (author === null) {
            setFilteredQuotes(quotes);
        } else {
            const filtered = quotes.filter(quote => quote.author === author);
            setFilteredQuotes(filtered);
        }
    };

    return (
        <>
        <Navbar></Navbar>
            <div className="Authors">
                <h3>Categories:</h3>
                <li onClick={() => {
                    filterQuotesByAuthor(null)
                    setFilteredQuotes([])
                }} >All</li>
                {authors.map((author) => {
                    return <li onClick={() => filterQuotesByAuthor(author)} >{author}</li>
                })}
            </div>
            <div className='Quotes'>
                {filteredQuotes.length === 0 ? <h1>All Quotes</h1> : <h1>Quotes of {filteredQuotes[0].author}</h1>}
                <ul>
                    {filteredQuotes.length === 0 ? <>{quotes.map((quote, index) => (
                        <li key={index}>{quote.text} - {quote.author}</li>
                    ))}</>
                        : <>{filteredQuotes.map((quote, index) => (
                            <li key={index}>{quote.text} - {quote.author}</li>
                        ))}</>
                    }

                </ul>
            </div>
        </>
    );
};

export default QuotesPage;
