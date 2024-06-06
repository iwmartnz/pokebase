import loading from '../assets/loading.svg';

export default function Loading() {
    return (
        <figure className='loading'>
            <img src={loading} alt='' height={30} width={30} />
        </figure>
    );
}
