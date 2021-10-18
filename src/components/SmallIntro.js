export default function SmallIntro(props) {
    return (
        <div className="page-title">
            <h1 className="page-title__heading">{props.title}</h1>
            <p className="page-title__text">{props.text}</p>
        </div>
    );
}