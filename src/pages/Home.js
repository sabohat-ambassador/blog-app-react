import { Link } from 'react-router-dom';
import ItTypes from "../components/ItTypes"
import Characters from "../components/Characters";
import Webdesign from '../components/Webdesign';



export default function Home() {
    return (
   <div>

        <section class="first-section">
            <article class="main-article">

                <div class="row">
                    <div class="col-lg-8 ">
                        <div class="first-text">
                            <h1 class="first-theme">Award-winning custom designs and digital branding solutions</h1>
                            <p class="texts">With over 10 years in the industry, we are experienced in creating fully
                                responsive websites, app design, and engaging brand experiences. Find out more about our
                                services.</p>
                            <div class="learn">
                                <a class="link" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="phone-img">
                            <img className='oval' src="img/oval.png"/>
                            <img className='phone' src="img/group 5.png" alt="phone"/>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section className='secondSection'>

       <div>
       <Link to="/WebDesign"><Webdesign image='img/laptoop.png ' name='WEB DESIGN'  view='VIEW PROJECTS'/></Link>
       </div>
       <div>
       <Link to="/AppDesign"><ItTypes image='img/blackberry.png' name='APP DESIGN ' view='VIEW PROJECTS'/></Link>
       <Link to="/GraphicDEsign"><ItTypes image='img/graphic.png' name='GRAPHIC DESIGN ' view='VIEW PROJECTS'/></Link>
       </div>
    </section>
    

    <section className='thirdSection'>
        <div className='characters'>
           <Characters img='img/man.png' theme='PASSIONATE' page='Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'/>
            <Characters img='img/man2.png' theme='RESOURCEFUL' page='Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'/>
         <Characters img='img/together.png' theme='FRIENDLY' page=' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'/>
       
        </div>
    </section>
    <section>
    
    </section>
    
   </div>
    );
}