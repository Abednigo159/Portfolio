import style from "./Footer.module.css";

export default function Footer(props){
    return(
        <>
            <p className={style.footer}>{props.footer}</p>
        </>
    )
}