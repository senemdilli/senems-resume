import '../css/Menu.css'

const Menu = () => {
    return (
        <div className='menu'>
            <div className='menu-content'>
                <div className='menu-items'>
                    <nav>
                        <ol>
                            <li>
                                <div className='item-inner'>
                                    <a href="/">
                                        <h1>Home</h1>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='item-inner'>
                                    <a href="/">
                                        <h1>Work</h1>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='item-inner'>
                                    <a href="/">
                                        <h1>About</h1>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='item-inner'>
                                    <a href="/">
                                        <h1>Connect</h1>
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Menu;