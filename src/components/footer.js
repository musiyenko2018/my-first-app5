import styles from "../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.info}>
            <div> © EPAM Teachers Internship </div>
           <div className={styles.footerBlock}>
               <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 6C12 2.69 9.31 0 6 0C2.69 0 0 2.69 0 6C0 10.5 6 17 6 17C6 17 12 10.5 12 6ZM4 6C4 4.9 4.9 4 6 4C7.1 4 8 4.9 8 6C8 7.1 7.11 8 6 8C4.9 8 4 7.1 4 6Z" fill="#F0F6FF"/>
               </svg>
               <span className={styles.footerText}> 01033, м. Київ, вул. Сім&#39;ї Прахових, 54</span>
           </div>
           <div className={styles.footerBlock}>
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20H15V18H10C5.66 18 2 14.34 2 10C2 5.66 5.66 2 10 2C14.34 2 18 5.66 18 10V11.43C18 12.22 17.29 13 16.5 13C15.71 13 15 12.22 15 11.43V10C15 7.24 12.76 5 10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C11.38 15 12.64 14.44 13.54 13.53C14.19 14.42 15.31 15 16.5 15C18.47 15 20 13.4 20 11.43V10C20 4.48 15.52 0 10 0ZM10 13C8.34 13 7 11.66 7 10C7 8.34 8.34 7 10 7C11.66 7 13 8.34 13 10C13 11.66 11.66 13 10 13Z" fill="#F0F6FF"/>
               </svg>
               <span className={styles.footerText}> dt7_a11y@gmail.com</span>
           </div>
           <div className={styles.footerBlock}>
               <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="#F0F6FF"/>
               </svg>
               <span className={styles.footerText}>+38-044-777-11-11</span>
           </div>
            </div>
        </footer>
    );
}
export default Footer;