import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    
    return (
        <nav className=''>
            <h1>ECommerce</h1>
            <div className=''>
                <button className=''>Celulares</button>
                <button>Tablet</button>
                <button>Notebook</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar