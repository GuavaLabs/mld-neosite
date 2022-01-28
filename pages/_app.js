import '../styles/globals.css'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// Header goes here fgt

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico"/>
        <title>Modern Life Dating</title>
      </Head>
      <header className='main-header'>
        <div  style={{marginLeft:"2rem;"}}>
          <Image src={"/mld-logo-white.png"} width={80} height={50} className='main-log' alt="MLD Logo" />
        </div>
        <nav  className='header-nav'>
          <ul>
            <Link href="/">
              <li className='list-item'>Home</li>
            </Link>
            <Link href="#services">
              <li className='list-item'>Services</li>
            </Link>
            <Link href="#">
              <li className='list-item'>Courses</li>
            </Link>
            <Link href="#">
              <li className='list-item'>Contact</li>
            </Link>
            <Link href="#">
              <li className='list-item'>More</li>
            </Link>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>)
}

export default MyApp
