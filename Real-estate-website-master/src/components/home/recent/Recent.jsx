import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='A property lease website provides a user-friendly platform for property owners to list their available rentals and for prospective tenants to search for their ideal home or business space. Our platform streamlines the leasing process, offering detailed property descriptions, high-quality images, and essential information like lease terms and amenities. With a simple, intuitive interface, users can easily filter properties based on location, property type, and budget. We also offer resources such as lease agreement templates and helpful tips to guide both property owners and tenants through a seamless leasing experience. Whether you are leasing or looking to lease, our website is your trusted destination for all your property needs.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
