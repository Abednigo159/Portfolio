import style from "./Tags.module.css";

export default function Tags(props){
    return(
        <div className={style.tagContainer}>
            <h2 className={style.tagName}>
                {props.tagName}
            </h2>
        </div>
    )
}