import  { FC } from   'react' ;
import { Raleway } from 'next/font/google'
import styles from './Home.module.scss'
import Layout from '@/components/layout/Layout'

const raleway = Raleway ({ subsets: [ 'latin' ], weight: [ '400' ,  '600' , '700' ] })

const Home: FC = () => {
    return (
        <Layout title='Home Page' description="Hello world!">
        <main className={styles.main}>
            <h1 className={raleway.className}>Hello world</h1>
        </main>
        </Layout>
    );
};
export default Home;