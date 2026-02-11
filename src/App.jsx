import style from "./App.module.css";

import Projects from "./projects/Projects.jsx";
import Header from "./header/Header.jsx";
import Tags from "./tags/Tags.jsx";
import Contacts from "./contacts/Contacts.jsx";
import {useState} from "react";

import profile from "./assets/myPicture.jpg";

import elevator from "./assets/elevator.mp4";
import cyclone from "./assets/cyclone.mp4";
import buzzer from "./assets/buzzer.mp4";
import pd2 from "./assets/pd2.mp4";
import galaga from "./assets/galaga.mp4";
import Footer from "./footer/Footer.jsx";

export default function App(){
    const [lists, setLists] = useState([{
        id: 1,
        video: cyclone,
        title: "Arduino-Based Cyclone Reflex Game",
        shortDes: "A game that tests your reflexes using an Arduino and LED lights.",
        description1: "Handled the game prototype while the team focused on documentation",
        description2: "Arduino UNO, NeoPixel LED ring, Buzzer buttons, and plywood for the structure",
        description3: "A cyclone reflex game where a running light goes around a NeoPixel LED ring. When it reaches the white light, you must press the button—otherwise, it’s game over. The game is designed for three players, each represented by a different color. The running light speeds up as you progress.", 
        playing: false,
        showDescription: false
    }, {
        id: 2,
        video: elevator,
        title: "Arduino-Based Mini Elevator",
        shortDes: "A simulation for a 4 story elevator",
        description1: "I did the connections to the arduino and the components",
        description2: "Arduino UNO, stepper motor, and cardboard as the structure",
        description3: "We made a mini elevator with four buttons corresponding to four different floors. When a button is pressed, the elevator moves and stops at the floor that matches the selected button, simulating how a real elevator operates.",
        playing: false,
        showDescription: false
    }, {
        id: 3,
        video: buzzer,
        title: "Arduino-Based Quiz Game Buzzer",
        shortDes: "A buzzer for quiz takers to help indicates who pressed first",
        description1: "I did the code and helped with the woodwork.",
        description2: "Arduino Nano, buzzer buttons, buzzer, LEDs, and plywood as structure",
        description3: "This is a commission that my friend and I made for a churc. A buzzer system for quiz competitions. It has six buttons and six lights. The first person to press their buzzer lights up their corresponding indicator, and the other lights are locked out until the reset button is pressed.",
        playing: false,
        showDescription: false
    }, {
        id: 4,
        video: pd2,
        title: "Arduino-Based RFID Attendance Checker And Navigator",
        shortDes: "An checker for faster and more efficient record of attendance",
        description1: "Built the project prototype, while the team handled the research documentation.",
        description2: "Arduino Mega, Arduino Uno, RFID scanner, RFID card and chips, 12v relay switch, solenoid lock, and blender for 3d model",
        description3: "An RFID scanner system for attendance. Each scanner has its own ID indicating the room it is placed in. When an ID card is scanned, the person’s name, ID number, room number, and the time of the scan are recorded and displayed on the website I created. This system makes it easier to locate specific people within the establishment.",
        playing: false,
        showDescription: false
    }, {
        id: 5,
        video: galaga,
        title: "Space shooter game",
        shortDes: "Please go to this link: space-shooter-lac.vercel.app",
        description1: "Personal project",
        description2: "HTML, CSS, and Javascript",
        description3: "I created this project while learning how the HTML5 canvas works in JavaScript. It’s a Galaga-like space shooting game featuring a player, two regular enemies, and one boss enemy.",
        playing: false,
        showDescription: false
    }]);

    const contactLists = [
        {id: 1, type: "Email", info: "abednigo159@gmail.com"},
        {id: 2, type: "Phone", info: "+63 964-968-4771"},
        {id: 3, type: "GitHub", info: "www.linkedin.com/in/aquino-john-joseph-s-500785378"}
        /* CREATE AND FIX A LINKED IN PROFILE */,
    ]

    function indexVideoPlay(id){
        setLists(prev => 
            prev.map(project => 
                project.id === id ? {...project, playing: !project.playing}
                : {...project, playing: false}
            )
        );
    }
    
    function indexHideDescription(id){
        setLists(prev =>
            prev.map(project =>
                project.id === id ? {...project, showDescription: !project.showDescription}
                : {...project, showDescription: false}
            )
        );
    }

    return(
        <div className={style.projectLists}>
            <Header picture={profile} header="I build games. Sometimes they fight back."
                    description="I like making games that helps people relax and have some peace. It does the opposite to me. It's fun still."/>
            <Tags tagName="Embedded Projects"/>
            <Projects 
                lists={lists} 
                indexHideDescription={indexHideDescription}
                indexVideoPlay={indexVideoPlay}/>
            <Contacts 
                title="Contacts" 
                contactLists={contactLists}/>
            <Footer
                footer="© 2026 John Joseph Aquino. All rights reserved."/>
        </div>
    )
}