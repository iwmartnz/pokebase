import logo from '../assets/logo.svg';

function Logo() {
    return (
        <figure className='logo-container'>
            <img src={logo} alt='' width={200} height={72} />
        </figure>
    );
}

export default Logo;
