import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from "../../styles/Science.module.css";


const Search = () => {
  const router = useRouter();
  const { query } = router.query;
  const [results, setResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query || '');

  useEffect(() => {
    if (query && query.length >= 3) {
      console.log(`Sending search request with query: ${query}`);
      axios.get(`/api/publications/search?query=${query}`)
        .then(response => {
          console.log('Search response:', response.data);
          setResults(response.data);
        })
        .catch(error => console.error('Error fetching search results:', error));
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.length >= 3) {
      router.push(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div>
      <Header />
      <Link href="/science">
        <button>До списку публікацій</button>
      </Link>
      <h1>Результати пошуку</h1>
      <p>Знайдено {results.length} результатів</p>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Введіть назву або ключове слово"
          onFocus={(e) => e.target.placeholder = ''}
          onBlur={(e) => e.target.placeholder = 'Введіть назву або ключове слово'}
        />
        <button type="submit" disabled={searchQuery.length < 3}>Шукати</button>
      </form>
      <div className="publications">
        {results.map((publication) => (
          <div className="publication-tile" key={publication.id}>
            <h2>{publication.title}</h2>
            <p>{publication.about.length > 120 ? `${publication.about.substring(0, 120)}...` : publication.about}</p>
            <p>Автор: {publication.author}</p>
            <Link href={`/publications/${publication.id}`}>
              <button>Читати далі</button>
            </Link>
          </div>
        ))}
      </div>
      {results.length > 6 && (
        <button>Завантажити ще</button>
      )}
      <Footer />
    </div>
  );
};

export default Search;