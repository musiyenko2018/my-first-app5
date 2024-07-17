import Head from 'next/head';
import Image from 'next/image';
import Map from "../../components/map";
import Header from '../../components/header';
import Footer from '../../components/footer';

const Contacts = () =>(
  
    <>
        <Header/>
        <div id="contacts">
    <h1>Контакти</h1>
    <h4>Адреса:</h4>
    <p><span>01033, м. Київ, вул. Сім'ї Прахових, 54</span></p>
    <h4>Електронна пошта:</h4>
    <p><span>dream_team7_a11y@gmail.com</span></p>
    <h4>Телефон:</h4>
    <p><span>+38-044-777-11-11</span></p>
    </div>
    <Map />
        <Footer />
     </>
  
  
);
export default Contacts;