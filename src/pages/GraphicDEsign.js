
import Cards from '../components/Cards';
import SmallIntro from '../components/SmallIntro';
import { Link } from 'react-router-dom';
import ItTypes from "../components/ItTypes"
import Webdesign from '../components/Webdesign'
export default function Graphicdesign() {
    return (
        <section>
            
              <div className="pageContent">
            <SmallIntro title='Graphic Design' text='We deliver eye-catching branding materials that are 
                tailored to meet your business objectives.' />
        </div>
        <div className='app-cards'>
            <Cards image='img/tim.jpg' title='TIM BROWN' text='A book cover designed for Tim Brown’s new release, ‘Change’'/>
            <Cards image='img/boxsed.jpg' title='BOXED WATER' text='A simple packaging concept made for Boxed Water'/>
            <Cards image='img/science.jpg' title='SCIENCE!' text='A poster made in collaboration with the Federal Art Project'/>
           
           
        </div>
        <div className='d-flex'>
        <Link to="/AppDesign"><ItTypes image='img/blackberry.png' name='APP DESIGN ' view='VIEW PROJECTS'/></Link>
            <Link to="/WebDesign"><Webdesign image='img/laptoop.png' name='WEB DESIGN'  view='VIEW PROJECTS'/></Link>
       </div>
        </section>
      
    );
}