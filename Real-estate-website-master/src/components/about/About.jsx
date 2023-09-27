import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>A property lease website is your one-stop destination for finding the perfect place to call home or listing your property for lease. Our platform offers a diverse range of rental options, from apartments and houses to commercial spaces. Whether you're a tenant in search of your ideal rental or a property owner looking to attract the right tenants, our user-friendly interface and comprehensive property listings make the process seamless.</p>
            <p> We provide valuable information on lease agreements, legal considerations, and property management services, ensuring a smooth and informed leasing experience for all parties. Explore our website today to simplify your property leasing journey.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
