export default function Webcard(props) {
    return (
        <div class="col-lg-6">

<div className='service'>

            <img src={props.image} alt="" className="service__image"/>
            <span className="service__info">
                <span className="service__title">{props.name}</span>
                <span className="service__text">{props.view}</span>
            </span>
</div>
     
    </div>
    );
}