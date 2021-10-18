

export default function Footer(props){
    return(

        <div classNameName='main=footer'>
            <div className='container'>

             <div className="row">
                 <div className="col-lg-8 col-md-6 ">
                     <div className="logo"><a href="index.html"><img src={props.logo} alt="logo"/></a></div>
                 </div>
                 <div className="col-lg-4 col-md-6 ">
                     <nav className="main-nav menu">
                         <a className="main-nav-link" href="index2.html">{props.company}</a>
                         <a className="main-nav-link" href="index3.html">{props.locations}</a>
                         <a className="main-nav-link" href="index4.html">{props.contact}</a>
                     </nav>
                 </div>
     
             </div><hr/>
             
             <div className="row end">
                 <div className="col-md-4">
     
                     <div className="address">
                         <a className="bold" href="#">{props.office}</a><br/>
                         <a href="#">{props.street}</a><br/>
                     
                         <a href="#">{props.toronto}</a><br/>
                     </div>
                 </div>
                 <div className="col-md-4">
                     <div className="address ">
                         <a className="bold" href="#">{props.central}</a><br/>
             
                         <a href="tel:+1 253-863-8967">{props.tel}</a><br/>
                         <a href="#">{props.email}</a>
                     </div>
     
                 </div>
                 <div className="col-md-4">
                     <div className="sayts">
                         <a href="https://www.facebook.com/" target="_blank"><i className="icon-facebook"></i></a>
                         <a href="https://www.youtube.com/" target="_blank"> <i className="icon-you-tube"></i></a>
                         <a href="https://twitter.com/" target="_blank"> <i className="icon-twitter"></i></a>
                         <a href="https://www.pinterest.com/" target="_blank"><i className="icon-pinterest"></i></a>
                         <a href="https://www.instagram.com/" target="_blank"><i className="icon-instagram-1"></i></a>
                     </div>
     
                 </div>
     
             </div>
            </div>
        </div>
     
       
      ) ;

}