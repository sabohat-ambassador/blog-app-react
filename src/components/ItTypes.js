


export default function SecondSection(props) {
    return (
        <section className='pages'>

            <div className="design">
                <img src={props.image} alt="image"/>
                <div className="design-text">
                    <h3 className="design-name">{props.name}</h3>
                    <p className="design-page">{props.view}</p>
                </div>
            </div>
    
        </section>
    );
}