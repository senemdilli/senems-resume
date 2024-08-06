import '../css/Header.css'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='left-part'>
                <p>Senem Dilli</p>
            </div>
            <div className='right-part'>
                <ul>
                    <li></li>
                    <li></li>
                    <li>
                        <button className='hamburger-btn'>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;