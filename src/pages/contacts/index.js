import Head from 'next/head';
import Image from 'next/image';
import Map from "../../components/map";
import Header from '../../components/header';
import Footer from '../../components/footer';
import Form from '../../components/form';
import styles from "../../styles/Contacts.module.css";

const Contacts = () =>(
  
    <>
        <Header/>
        <div className={styles.contacts} >
        <div className={styles.infoContacts}>
         <h1>Контакти</h1>
        <h4>Адреса:</h4>
    <p><span>01033, м. Київ, вул. Сім'ї Прахових, 54</span></p>
    <h4>Електронна пошта:</h4>
    <p><span>dt7_a11y@gmail.com</span></p>
    <h4>Телефон:</h4>
    <p><span>+38-044-777-11-11</span></p>
    </div> 
    <div className={styles.feedback}>
     <Form />
    </div>
    </div>
    <Map />
        <Footer />
     </>
  
  
);
export default Contacts;