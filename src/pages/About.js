import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <h3>Welcome to Temani’s Pizzeria!</h3>
        <p>
          
        Located in LAC 2 TUNIS , was natural to name our <strong>Temani's Pizzeria</strong> . <br></br> <br></br> 

        Dahmoun Temani and Akram Temani, the two owners, after having worked for many years in several restaurants and pizzerias all over Italy, decided to embrak their own adventure. Being Neapolitan and obsessed about pizza, they thought that the borough of Ealing needed a traditional neapolitan pizzeria. So, after working with their own hands on everything and importing the wood fired oven from Italy, Temani’s Pizzeria finally opened its doors to the public on 15 september 2021. <br></br> <br></br> <br></br>
        The pizza served in Temani's Pizzeria, is exactly the same as the pizza you can eat on the streets of Naples, using the same ingredients and adopting the same cooking method.<br></br> <br></br> <br></br>
        Temani's Pizzeria will be happy to feed everyone, from pennyless students to VIPs, with the authentic taste of Naples, according to the motto “Quality and quantity at honest prices”.  In fact pizzerias are not a sort of second-class restaurant, but a place where everyone gets treated in the same way and standards should be kept as high as possible with the desire to improve them all the time.<br></br> <br></br>

         


        
        </p>
  
      </div>
    </div>
  );
}

export default About;
