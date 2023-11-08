import React from "react";
import Links from "./Links";

function About({bio, github, linkedin}) {
  
    
  return (
    <div id="about">
      <h2>About Me</h2>
      {!bio || bio === ""? null : <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin}/>
    </div>
  );
}



export default About;

//Update the About component so that:

//If a prop of bio is passed to this component, it is displayed inside of a <p> tag
//If a prop of bio is not passed down, or if bio is an empty string, don't display the <p> tag
//Hint: you'll need to do some conditional renderingLinks to an external site. 
//here to determine whether or not to display the <p> tag