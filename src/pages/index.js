import Head from 'next/head';
import Image from "next/image";
import Header from '../components/header';
import Footer from '../components/footer';
import styles from "../styles/Intro.module.css";

export default function Home (){
  return (
    <div>
      <Header/>
      <div className={styles.intro}>
        <div className={styles.info}>
      <h1>Dream Team 7 <br/>навчить Вас створювати <br/>безбар’єрні сайти</h1>
      <h3>Кафедра пропонує програму довжиною 4 спрінти, <br/>яка познайомить Вас із цифровою доступністю. </h3>
      <h3>Студенти зможуть отримати розуміння процесів ІТ-<br/>розробки зсередини, актуальні теоретичні знання <br/> та практичний досвід роботи з сучасними інструментами.</h3>
      </div>
          <Image src="/intro.png" width={900} height={400} alt="" />
      </div>
      <div className={styles.mainText}>
        <h1>Програма навчання</h1>
      </div>
        <div className={styles.main}>  
        <div className={styles.mainBlock}>
            <div>
              <Image src="/sprint1.png" width={475} height={329} alt="" />
              <h3 className={styles.mainBlockItem}>Спрінт 1 - Знайомство</h3>
              <p className={styles.mainBlockItem}><svg width="81" height="1" viewBox="0 0 81 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="80.5" y2="0.5" stroke="#5E6063"/>
          </svg>
          </p>
            </div>
            <div>
              <Image src="/sprint2.png" width={475} height={329} alt="" />
              <h3 className={styles.mainBlockItem}>Спрінт 2 - Розробка</h3>
              <p className={styles.mainBlockItem}><svg width="81" height="1" viewBox="0 0 81 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="80.5" y2="0.5" stroke="#5E6063"/>
          </svg>
          </p>
            </div>
            <div>
              <Image src="/sprint3.png" width={475} height={329} alt="" />
              <h3 className={styles.mainBlockItem}>Спрінт 3 - Імплементація</h3>
              <p className={styles.mainBlockItem}><svg width="81" height="1" viewBox="0 0 81 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="80.5" y2="0.5" stroke="#5E6063"/>
          </svg>
          </p>
            </div>

          </div >

        </div>
      
      <Footer />
  </div>
  )

}
