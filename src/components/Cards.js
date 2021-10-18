export default function Cards (props){
    return(
      
               
                    <div className="card">
                        <img src={props.image} alt="" class="card__image"/>
                        <div className="card__content">
                            <h3 className="card__title">{props.title}</h3>
                            <p className="card__text">{props.text}</p>
                        </div>
                    </div>
               
         
    )
}