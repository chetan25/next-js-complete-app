import Link from 'next/link';
import Logo from './logo';
import styles from './main-navigation.module.css';

const MainNavigation = () => {
 return (
    <header className={styles.header}>
        <Link href='/'>
            {/* if you pass anything other than text, Link will no add a tag, so we need to add one. But Link will control it */}
            <a><Logo /></a>
        </Link>
        <nav>
            <ul>
                <li><Link href='/posts'>Posts</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </header>
 )
}

export default MainNavigation;