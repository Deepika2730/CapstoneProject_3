import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title='Select Your Package' subtitle='On our property lease website, we offer a variety of tailored packages to meet your leasing needs. Whether you are a tenant searching for the perfect rental property or a property owner looking for management solutions, we have a package designed just for you. Choose from flexible lease terms, comprehensive property management services, or tenant screening options' />
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Price
