import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from "../../styles/Science.module.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Science = () => {
    const router = useRouter();
    const [publications, setPublications] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        console.log('Fetching all publications');
        axios.get('/api/publications')
          .then(response => {
              console.log('Publications response:', response.data);
              setPublications(response.data);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (query.length >= 3) {
        router.push(`/search?query=${query}`);
      }
    };
  
    return (
    <div>
        <Header/>
        <div className={styles.intro}>
        <div className={styles.info}>    
    <h1>Наукова робота</h1>
    <p>На кафедрі здійснюються наукові дослідження в галузі <br />розробки сайтів для всіх користувачів, включаючи тих, <br /> хто має обмеження, сприяють створенню доступного <br />веб-простору. Вони зосереджені на забезпеченні доступності, <br />зручності використання та підтримці різних технологій допомоги, <br /> що робить Інтернет доступним для кожного.</p>
    </div>
    <Image src="/science1.png" width={900} height={400} alt="" />
    </div>
    <div className={styles.searchBar}>
    <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введіть назву або ключове слово"
          onFocus={(e) => e.target.placeholder = ''}
          onBlur={(e) => e.target.placeholder = 'Введіть назву або ключове слово'}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSearch(e);
            }
          }}
        />
        <button type="submit" disabled={query.length < 3}>Шукати</button>
      </form>
      </div>
      <h1>Усі публікації кафедри</h1>
      <div className={styles.publications}>
        {publications.slice(0, 6).map((publication) => (
          <div className={styles.publicationTile} key={publication.id}>
            <h2>{publication.title}</h2>
            <p>{publication.about}</p>
            <p>Автор: {publication.author}</p>
            <button>Читати далі</button>
          </div>
        ))}
      </div>
      {publications.length > 6 && (
        <button>Завантажити ще</button>
    )}
    </div>
   
  );};

export default Science;
