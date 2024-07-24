import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';

const Staff = () =>(
  
    <>
        <Header/>
    <h1 align = "center">Колектив ще в стадії формування</h1>
    <div align = "center">
        <Image src="/staff.png" width={1300} height={489} alt="" />
      </div>
        <Footer />
     </>
  
  
);
export default Staff;