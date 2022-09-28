import classes from '../css/MainPage.module.css'
import {FaSearch} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'


function Header(){
    return (
        <div className={classes.top_section}>
            <div className={classes.logo}>
                GACHASHOP
            </div>
            <div className={classes.search_container}>
                <div className={classes.search_bar}>
                    <input type="text" placeholder="Search..."></input>
                </div>
                <div className={classes.search_button}>
                    <FaSearch size={35}/>
                </div>
                <div className={classes.msg_icons}>
                    <div className={classes.welcomeMsg}>
                        WELCOME NAME
                    </div>
                    <div className={classes.shoppingIcons}>
                        <FaShoppingCart size={20} />
                    </div>
                </div>
                
            </div>
        </div>       
    )
}

export default Header;
