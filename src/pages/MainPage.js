import classes from '../css/MainPage.module.css'
import Header from '../components/Header'
import Tabs from '../components/Tab'
import testimage4 from '../Images/testimage4.png'
import testimage5 from '../Images/testimage5.png'
import testimage6 from '../Images/testimage6.png'
import {Link} from "react-router-dom";



function MainPage(){
    return (
      <div className={classes.main_content}>
        <Header />
        <div className={classes.middle_section}>
          <div className={classes.middle_firstchild}>
            <div className={classes.sidelist}>
              <ul>
                <li className={classes.first_sub_list}>
                  <Link to="/gachashop/action" className={classes.genre_link}>Action</Link>
                </li>
                <li className={classes.sub_list}>
                  <Link to="/gachashop/adventure" className={classes.genre_link}>Adventure</Link>
                </li>
                <li className={classes.sub_list}>
                  <Link to="/gachashop/rpg" className={classes.genre_link}>Rpg</Link>
                </li>
                <li className={classes.sub_list}>
                  <Link to="/gachashop/openworld" className={classes.genre_link}>Open World</Link>
                </li>
                <li className={classes.sub_list}>
                  <Link to="/gachashop/puzzle" className={classes.genre_link}>Puzzle</Link>
                </li>
                <li className={classes.sub_list}>
                  <Link to="/gachashop/towerdefense" className={classes.genre_link}>Tower Defense</Link>
                </li>
                <li className={classes.last_sub_list}>
                  <Link to="/gachashop/visualnovel" className={classes.genre_link}>Visual Novel</Link>
                </li>
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
            <img
              className={classes.product_image}
              src={testimage4}
              alt="testimage4"
            />
          </div>
          <div className={classes.bottom_secondchild}>
            <img
              className={classes.product_image}
              src={testimage5}
              alt="testimage5"
            />
          </div>
          <div className={classes.bottom_thirdchild}>
            <img
              className={classes.product_image}
              src={testimage6}
              alt="testimage6"
            />
          </div>
        </div>
      </div>
    );
}

export default MainPage;

