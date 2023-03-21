import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link';

export const getStaticProps = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return {
        props : {ninjas : data}
    }
}

const Ninjas = ({ninjas}) => {
    return ( 
        <>
        <div>All Ninjas</div>
        {ninjas.map(ninja =>(
            <Link href={'/ninjas/'+ninja.id} className={styles.single} key={ninja.id}>
                <h3>{ninja.name}</h3>
            </Link>
        ))}
        </>
     );
}
 
export default Ninjas;
