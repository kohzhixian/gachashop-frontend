import classes from '../css/MainPage.module.css'
import {FaSearch} from 'react-icons/fa'
import {useState} from 'react'
import Tabs from '../components/Tab'
import testimage4 from '../Images/testimage4.png'
import testimage5 from '../Images/testimage5.png'
import testimage6 from '../Images/testimage6.png'



function MainPage(){
    const [activeTab, setActiveTab] = useState("tab1");
    return (
      <div className={classes.main_content}>
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
                <div className={classes.shopping_icons}>
                    SHOPPING ICONS
                </div>
                
            </div>
        </div>
        <div className={classes.middle_section}> 
            <div className={classes.middle_firstchild}>
                <div className={classes.sidelist}>
                    <ul>
                        <li className={classes.first_sub_list}>ITEM 1</li>
                        <li className={classes.sub_list}>ITEM 1</li>
                        <li className={classes.sub_list}>ITEM 1</li>
                        <li className={classes.sub_list}>ITEM 1</li>
                        <li className={classes.sub_list}>ITEM 1</li>
                        <li className={classes.sub_list}>ITEM 1</li>
                        <li className={classes.last_sub_list}>ITEM 1</li>
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

