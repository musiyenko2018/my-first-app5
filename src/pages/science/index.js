import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from "../../styles/Science.module.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Science = () =>{

    const [publications, setPublications] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const response = await axios.get(`/api/publications?page=${page}&size=6`);
      const newPublications = response.data;
      setPublications(prevPublications => [...prevPublications, ...newPublications]);
      setPage(prevPage => prevPage + 1);
      if (newPublications.length < 6) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching publications:', error);
    }
  };

  const renderPublication = (publication) => (
    <div key={publication.id} className="publication-tile">
      <h3>{publication.title.length > 50 ? `${publication.title.substring(0, 50)}...` : publication.title}</h3>
      <p>{publication.about.length > 120 ? `${publication.about.substring(0, 120)}...` : publication.about}</p>
      <p><strong>Author:</strong> {publication.author}</p>
      <button onClick={() => window.open(publication.link, '_blank')}>Читати далі</button>
    </div>
  );
  
  return (
    <div>
        <Header/>
        <div className={styles.intro}>
        <div className={styles.info}>    
    <h1 >Наукова робота</h1>
    <p>На кафедрі здійснюються наукові дослідження в галузі <br />розробки сайтів для всіх користувачів, включаючи тих, <br /> хто має обмеження, сприяють створенню доступного <br />веб-простору. Вони зосереджені на забезпеченні доступності, <br />зручності використання та підтримці різних технологій допомоги, <br /> що робить Інтернет доступним для кожного.</p>
    </div>
    <Image src="/science1.png" width={900} height={400} alt="" />
    </div>
    <div className={styles.mainText}>
        <h1>Пошук публікацій</h1>
      </div>
      <div className="science-page">
      <h1>Усі публікації</h1>
      <div className="publications-container">
        {publications.map(renderPublication)}
      </div>
      {hasMore && (
        <button onClick={fetchPublications} className="load-more-button">
          Завантажити ще
        </button>
      )}
    </div>
        <Footer />
    </div>
  );
  
};

export default Science;