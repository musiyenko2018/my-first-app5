import Head from 'next/head';
import Image from 'next/image';
import Header from '../../components/header';
import Footer from '../../components/footer';
import styles from '../../styles/About.module.css';

const About = () => (
	<>
		<div className={styles.wrapper}>
			<div className={styles.bodyWapper}>
				<Header />
				<h1 align='center'>Сторінка в стадії розробки</h1>
				<div align='center'>
					<Image src='/about.jpg' width={500} height={500} alt='' />
				</div>
				<h1 align='center'>
					Наші спеціалісти скоро все <br />
					зроблять
				</h1>
			</div>
			<div className={styles.footerWrapper}>
				<Footer />
			</div>
		</div>
	</>
  
  
);
export default About;
