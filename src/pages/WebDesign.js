
import Cards from '../components/Cards';
import SmallIntro from '../components/SmallIntro';
import { Link } from 'react-router-dom';
import ItTypes from "../components/ItTypes"

export default function WebDesign() {
    return (
        <section>
       
        <div className="pageContent">
            <SmallIntro title='Web Design' text='We build websites that serve as powerful marketing tools 
and bring memorable brand experiences.' />
        </div>
      
        <div className='bag-cards'>
            <Cards image='img/Express - Desktop.jpg' title='EXPRESS' text='A multi-carrier shipping website for ecommerce businesses'/>
            <Cards image='img/Transfer - Desktop.jpg' title='TRANSFER' text='Site for low-cost money transfers and sending money within seconds'/>
            <Cards image='img/Photon - Desktop.jpg' title='PHOTON' text='A state-of-the-art music player with high-resolution audio and DSP effects'/>
            <Cards image='img/Builder - Desktop.jpg' title='BUILDER' text='Connects users with local contractors based on their location'/>
            <Cards image='img/Blogr - Desktop.jpg' title='BLOGR' text='Blogr is a platform for creating an online blog or publication'/>
            <Cards image='img/Camp - Desktop.jpg' title='CAMP' text='Get expert training in coding, data, design, and digital marketing'/>
        </div>
        <div className='row'>
       <Link to="/AppDesign"><ItTypes image='img/blackberry.png' name='APP DESIGN ' view='VIEW PROJECTS'/></Link>
       <Link to="/GraphicDesign"><ItTypes image ='img/graphic.png' name='GRAPHIC DESIGN ' view='VIEW PROJECTS'/></Link>
       </div>
        </section>
    );
}