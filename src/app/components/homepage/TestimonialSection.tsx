import React from 'react'
import StarRating from '../icons/StarRating'
import Link from 'next/link'

const TestimonialSection = () => {
    return (
        <div className="px-[3rem] lg:px-[7.5rem] py-[4.5rem] ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2.5625rem] items-center">
                <div className="flex flex-col ">
                    <div className="">
                        <p className="font-medium font-header text-[2rem]">TESTIMONIALS</p>
                    </div>{" "}
                    <div className="">
                        {" "}
                        <h3 className="font-bold font-header leading-[3.9rem] text-[3rem]">
                            OUR CLIENTS SPEAK <br />
                            FOR US
                        </h3>
                    </div>
                </div>
                <div className="bg-primary-dark py-10 px-11 rounded-xl">
                    <div className="flex items-center gap-[.4688rem]">
                        {Array(5).fill(null).map((_, index) => (
                            <StarRating key={index} />
                        ))}



                    </div>
                    <p className='text-white text-[2rem] font-body mt-2'>4.8/5 Ratings From Our Clients</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-11">
                <div className="bg-[#F7F7F7] px-6 py-8 rounded-xl">
                    <div className="flex items-center gap-[.4688rem]">
                        {Array(5).fill(null).map((_, index) => (
                            <StarRating key={index} color='#0E455F' width={30} height={30} />
                        ))}
                    </div>
                    <p className='font-body text-base text-text-black py-6'>I was very impressed with Nels Cargo & Logistics handling of my
                        recent shipment. They went above and beyond to ensure my cargo
                        arrived safely and on time. I will definitely be using their
                        service again in the future.</p>
                    <div className="">
                        <p className='font-header text-lg font-medium uppercase'>AYODEJI SAmuel, CEO ASAM AUTOMOBILE</p>
                    </div>
                </div>
                <div className="bg-[#F7F7F7] px-6 py-8 rounded-xl">
                    <div className="flex items-center gap-[.4688rem]">
                        {Array(5).fill(null).map((_, index) => (
                            <StarRating key={index} color='#0E455F' width={30} height={30} />
                        ))}
                    </div>
                    <p className='font-body text-base text-text-black py-6'>I was very impressed with Nels Cargo & Logistics handling of my
                        recent shipment. They went above and beyond to ensure my cargo
                        arrived safely and on time. I will definitely be using their
                        service again in the future.</p>
                    <div className="">
                        <p className='font-header text-lg font-medium uppercase'>AYODEJI SAmuel, CEO ASAM AUTOMOBILE</p>
                    </div>
                </div>
                <div className="bg-[#F7F7F7] px-6 py-8 rounded-xl">
                    <div className="flex items-center gap-[.4688rem]">
                        <StarRating color='#0E455F' width={30} height={30} />
                        <StarRating color='#0E455F' width={30} height={30} />
                        <StarRating color='#0E455F' width={30} height={30} />
                        <StarRating color='#0E455F' width={30} height={30} />
                        <StarRating color='#3333' width={30} height={30} />
                    </div>
                    <p className='font-body text-base text-text-black py-6'>I was very impressed with Nels Cargo & Logistics handling of my
                        recent shipment. They went above and beyond to ensure my cargo
                        arrived safely and on time. I will definitely be using their
                        service again in the future.</p>
                    <div className="">
                        <p className='font-header text-lg font-medium uppercase'>AYODEJI SAmuel, CEO ASAM AUTOMOBILE</p>
                    </div>
                </div>
                <div className="bg-[#F7F7F7] px-6 py-8 rounded-xl">
                    <div className="flex items-center gap-[.4688rem]">
                        {Array(5).fill(null).map((_, index) => (
                            <StarRating key={index} color='#0E455F' width={30} height={30} />
                        ))}
                    </div>
                    <p className='font-body text-base text-text-black py-6'>I was very impressed with Nels Cargo & Logistics handling of my
                        recent shipment. They went above and beyond to ensure my cargo
                        arrived safely and on time. I will definitely be using their
                        service again in the future.</p>
                    <div className="">
                        <p className='font-header text-lg font-medium uppercase'>AYODEJI SAmuel, CEO ASAM AUTOMOBILE</p>
                    </div>
                </div>
            </div>

            <div className="py-8">
                <Link href={"#"}><button className='button'>CONTACT US</button></Link>
            </div>
        </div>
    )
}

export default TestimonialSection