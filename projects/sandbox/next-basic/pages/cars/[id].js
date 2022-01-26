import { useRouter } from 'next/router'; //accesses query params from URL
import Head from'next/head';
import styles from '../../styles/Cars.module.css';

export default function Cars({ car }) { 

    const router = useRouter();
    const { id } = router.query;
    const make = {id}.id[0].toUpperCase() + {id}.id.slice(1).toLowerCase();

    return (
        <>
            <Head>
                <title>{make} page</title>
            </Head>

            <h1>{make}</h1>  {/*prints hello + whatever is after cars/ in the URL*/}
            <img className={styles.carImg} src={car.image} alt="car image"/>
        </>
    );
}

//fetch data
export async function getStaticProps({ params }) {

    const req = await fetch(`http://localhost:3000/${params.id}.json`);  //request to localhost
    const data = await req.json();  //convert to json

    //make object with props property
    return {
        props: { car: data },
    }
}

export async function getStaticPaths() {

    const req = await fetch(`http://localhost:3000/cars.json`);  //request to localhost
    const data = await req.json();  //convert to json

    const paths = data.map(car => {

        return { params: { id: car } }
    })

    return {
        paths,
        fallback: false
    };

}