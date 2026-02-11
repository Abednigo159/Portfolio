import {useRef, useEffect} from "react";
import style from "./Projects.module.css";

export default function Projects({lists, indexVideoPlay, indexHideDescription}){

    const videoRefs = useRef([]);

    useEffect(() => {
        lists.forEach((project) => {
            const video = videoRefs.current[project.id];
            if(video){
                if(project.playing){
                    video.play();
                }
                else{
                    video.pause();
                }
            }
        })
    }, [lists])

    return(
        <>
            {lists.map(project => (
                <main key={project.id} className={style.projects}>
                    <div onClick={() => indexHideDescription(project.id)} className={style.column}>
                        <video onClick={(e) => 
                            {e.stopPropagation(); indexVideoPlay(project.id);
                            }}
                            className={project.playing ? style.videoExpand : style.videoDefault} src={project.video} controls/>
                        <div className={style.textsContainer}>
                            <h2 className={style.title}>{project.title}</h2>
                            <div className={style.descriptionContainer}>
                                <p className={style.shortDes}>{project.shortDes}</p>
                                <i className={"fa-solid fa-angle-right"}></i> {/* MAKE SURE THIS IS WORKING TOMORROW */}
                            </div>
                        </div>
                    </div>
                    <ul className={`${style.description} ${project.showDescription ? style.show : style.hide}`}>
                            <li className={style.list}>{project.description1}</li>
                            <li className={style.list}>{project.description2}</li>
                            <li className={style.list}>{project.description3}</li>
                    </ul>
                </main>
            ))}
        </>
    );
}
