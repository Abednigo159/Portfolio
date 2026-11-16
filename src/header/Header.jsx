import style from "./Header.module.css";

export default function Header(props){
    return(
        <header className={style.headerContainer}>
            <img className={style.profile} src={props.picture}/>
            <h1 className={style.header}>{props.header}</h1>
            <p className={style.description}>{props.description}</p>   
        </header>
    )
}