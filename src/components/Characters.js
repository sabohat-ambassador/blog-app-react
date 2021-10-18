export default function thirdSection(props){
    return(
        <section className="thirdSection">
            <div>

                        <div className="OurCharacter">
                                <img src={props.img} alt="passionate" />
                                <div className="characters-text">
                                    <h4 className="characters-theme">{props.theme}</h4>
                                    <p className="characters-page"> {props.page} </p>
                                </div>
                        </div>
            </div>
                  
        </section>
    );

}