import style from "./Contacts.module.css";

export default function Contacts({title, contactLists = []}){
    return(
        <div className={style.contactsContainer}>
            <h1 className={style.contactTitle}>{title}</h1>

            <ul className={style.contactLists}>
                {contactLists.map((contact) =>(
                    <li key={contact.id} className={style.contact}>
                        {contact.type} : {contact.info}
                    </li>
                ))} 
            </ul>
        </div>
    )
}