import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>List Ninjas | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quaerat ipsa doloribus harum dolor necessitatibus, nesciunt quae
          perspiciatis qui quia reiciendis magni, obcaecati nostrum, fuga quo
          vero debitis similique ad.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          quaerat ipsa doloribus harum dolor necessitatibus, nesciunt quae
          perspiciatis qui quia reiciendis magni, obcaecati nostrum, fuga quo
          vero debitis similique ad.
        </p>
        <Link href='/ninjas' className={styles.btn} >See Listing Ninjas</Link>
      </div>
    </>
  );
}
