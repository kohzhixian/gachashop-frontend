import classes from '../css/MainPage.module.css'
import Header from '../components/Header'
import {FaSearch} from 'react-icons/fa'
import {FaShoppingCart} from 'react-icons/fa'
import {useState} from 'react'
import Tabs from '../components/Tab'
import testimage4 from '../Images/testimage4.png'
import testimage5 from '../Images/testimage5.png'
import testimage6 from '../Images/testimage6.png'



function MainPage(){
    const [activeTab, setActiveTab] = useState("tab1");
    return (
      <div className={classes.main_content}>
        <Header />
        <div className={classes.middle_section}> 
            <div className={classes.middle_firstchild}>
                <div className={classes.sidelist}>
                    <ul>
                        <li className={classes.first_sub_list}>Action</li>
                        <li className={classes.sub_list}>Adventure</li>
                        <li className={classes.sub_list}>RPG</li>
                        <li className={classes.sub_list}>Open World</li>
                        <li className={classes.sub_list}>Puzzle</li>
                        <li className={classes.sub_list}>Tower Defense</li>
                        <li className={classes.last_sub_list}>Visual Novel</li>
                    </ul>
                </div>
            </div>
            <div className={classes.middle_secondchild}>
                <div className={classes.tab_div}>
                    <Tabs />
                </div>
            </div>
        </div>
        <div className={classes.bottom_section}> 
            <div className={classes.bottom_firstchild}>
                <img className={classes.product_image} src={testimage4} alt="testimage4"/>
            </div>
            <div className={classes.bottom_secondchild}>
                <img className={classes.product_image} src={testimage5} alt="testimage5"/>
            </div>
            <div className={classes.bottom_thirdchild}>
                <img className={classes.product_image} src={testimage6} alt="testimage6"/>
            </div>
        </div>
      </div>
    );
}

export default MainPage;

