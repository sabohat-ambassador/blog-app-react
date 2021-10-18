export default function lastsection(props){
    return(
        <section class="about-project">
        <div class="last-section">
            <div class="col-lg-9">
                <div class="talk">
                    <h3 class="project-theme">{props.theme}</h3>
                    <p class="project-page">{props.page}
                    </p>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="get">
                    <a class="link" href="#">{props.link}</a>
                </div>
            </div>
        </div>
    </section>
   

    )
}