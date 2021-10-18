import Cards from '../components/Cards';
import SmallIntro from '../components/SmallIntro';
import { Link } from 'react-router-dom';
import ItTypes from "../components/ItTypes"
import Webdesign from '../components/Webdesign'
export default function Appdesign() {
    return (
        <section>
            <div>
         
            </div>
              <div className="pageContent">
            <SmallIntro title='App Design' text='Our mobile designs bring intuitive digital solutions
                to your customers right at their fingertips.' />
        </div>
        <div className='app-cards'>
            <Cards image='img/Expressair - Desktop.jpg' title='AIRFILTER' text='Solving the problem of poor indoor air quality by filtering the air'/>
            <Cards image='img/Express - Desktop (1).jpg' title='EYECAM' text='Product that lets you edit your favorite photos and videos at any time'/>
            <Cards image='img/Express - Desktop (2).jpg' title='FACEIT' text='Get to meet your favorite internet superstar with the faceit app'/>
            <Cards image='img/Express - Desktop (3).jpg' title='TODO' text='A todo app that features cloud sync with light and dark mode'/>
            <Cards image='img/Express - Desktop (4).jpg' title='LOOPSTUDIOS' text='A VR experience app made for Loopstudios'/>
           
        </div>
        <div className='d-flex'>
        <Link to="/WebDesign"><Webdesign image='img/laptoop.png' name='WEB DESIGN ' view='VIEW PROJECTS'/></Link>
       <Link to="/GraphicDEsign"><ItTypes image='img/graphic.png' name='GRAPHIC DESIGN ' view='VIEW PROJECTS'/></Link>
       </div>
        </section>
      
    );
}