import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';

const News = () =>(
  
    <>
        <Header/>
    <h1 align = "center">Ви не бачите новини?!</h1>
    <div align = "center">
        <Image src="/news.png" width={400} height={550} alt="" />
      </div>
      <h1 align = "center">Значить а11у сюди ще не дісталася. <br/>Трохи почекайте</h1>
     <Footer />
     </>
  
  
);
export default News;