import React from 'react'
import Layout from '../component/layout/Layout'

import "../Style/About.css"

function About() {
  return (

    <Layout> 


<div className="about">

  <div className="content">
    <h1>Welcome to Anpurana Resturant..</h1> 

        <p>
          At Anpurana Restaurant , we believe that dining is more than just eating—it's an experience. Nestled in the heart of Bihar, our restaurant offers a unique blend of traditional and contemporary cuisine that tantalizes your taste buds and warms your heart.
        </p>
  </div>

  <div className="story">
    <h1>Our Story</h1>

     <p>Founded by Roopesh Kumar, Anpurana Restaurant began with a passion for culinary excellence and a dream to create a welcoming space where people can enjoy delicious food in a cozy and friendly atmosphere. Roopesh's journey started in his grandmother's kitchen, where he learned the art of cooking authentic dishes that have been passed down through generations. This early exposure ignited his love for food and his desire to share this passion with others.</p>
  </div>


   <div className="meet">
    <h1>Meet Roopesh Kumar</h1>

    <p>Roopesh Kumar, the visionary behind Anpurana Restaurant, is not just a restaurateur but a passionate foodie. With over 5 years of experience in the culinary industry, Roopesh has honed his skills in various kitchens around the world. His commitment to excellence and innovation is evident in every dish served at Anpurana Restaurant.

       Roopesh believes in the power of food to bring people together. Whether you're celebrating a special occasion or simply enjoying a meal with loved ones, Roopesh and his team are dedicated to making your visit special.</p>
   </div>

   <div className="team">
    <h1>Our Team</h1>
    <p>Behind the scenes, we have a team of talented chefs and friendly staff who share Roopesh's passion for great food and excellent service. Each member of our team plays a vital role in creating the unique dining experience that Anpurana Restaurant is known for.</p>
   </div>
</div>
      
    </Layout>
   
  )
}

export default About