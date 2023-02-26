import GlassCard from "./GlassCard";
import React from 'react';
import { ProjectData } from "../obj.ts";

const UIImage = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        window.open(props.href, "_blank");  
    }
  return (
    <div className="relative h-fit w-fit ml-5 UIimage-container">
      <div
        className="w-64 h-36 rounded-4xl"
        style={{
          backgroundImage: `url(${require(`../img/${props.img}`)})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      />
      <div className="
      UIimage-overlay absolute top-0 left-0
      rounded-4xl w-full h-full bg-darkOverlay
      items-center justify-center hidden
      " onClick={handleClick}>
        <img 
            src={require(`../img/Github.png`)}
            alt={props.image}
        />
      </div>
    </div>
  );
};

const Project = (props) => {
    return (
        <GlassCard color="blue" width='80%'>
            <div className="overflow-hidden h-48 hover:h-64 duration-200 tracking-widest">
                <h2 className="text-lg font-bold">{props.title}</h2>
                <div className="flex mt-3">
                    <p className="leading-7 text-md">
                        {props.desc}
                    </p>
                    <UIImage img={`${props.project}.png`} href={props.href}/>
                </div>  
                <div className="flex justify-evenly mt-5 h-12">
                    {props.children}   
                </div>     
            </div>
      </GlassCard>
    );
};


const Projects = () => {
    return (
        <div className="h-full flex flex-col justify-between py-10">
            <Project 
                project={ProjectData.p1.title} 
                title={ProjectData.p1.title} 
                href={ProjectData.p1.href}
                desc={ProjectData.p1.text}
                >
                    <img src="https://img.icons8.com/color/48/000000/spring-logo.png" alt="Spring"/>
                    <img src="https://img.icons8.com/color/256/git.png" alt="Git"/>
                    <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java"/>
            </Project>

            <Project 
                project={ProjectData.p2.title} 
                title={ProjectData.p2.title} 
                href={ProjectData.p2.href}
                desc={ProjectData.p2.text}
            >
                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React Native"/>
                <img src="https://img.icons8.com/color/48/000000/redux.png" alt="Redux"/> 
                <img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="Material UI"/>
                <img src="https://img.icons8.com/color/256/tailwindcss.png" alt="Tailwind"/>
                <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="Firebase"/>

            </Project>

            <Project 
                project={ProjectData.p3.title} 
                title={ProjectData.p3.title} 
                href={ProjectData.p3.href}
                desc={ProjectData.p3.text}
            >
                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React Native"/>
                <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="Javascript"/>
                <img src="https://img.icons8.com/color/256/tailwindcss.png" alt="Tailwind"/>
                <img src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" alt="Vercell"/>
            </Project>
        </div>
    );
};

export default Projects;