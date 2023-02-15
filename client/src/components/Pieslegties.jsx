import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from 'react-bootstrap'


const Prof = () => {

    return (
        <Container fluid className='py-10 max-w-[2000px] mx-auto'>
            <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold py-[30px] text-center my-5  '>Lietotājs</h1>
            <div className='flex py-[100px]'>
                <div className='w-full mb-4 bg-gray-300 p-10 rounded-lg '>
                    <h1 className='font-bold mx-auto md:text-4xl sm:text-3xl text-3xl py-2 mb-5'>Pieslēgties</h1>
                    <form>
                        <div className="mb-6">
                            <div className="px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-md">
                                    <p className='mb-2 font-bold'>E-pasts</p>
                                    <input className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3"
                                        required type="email" placeholder="Email"/>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-wrap mb-6">
                            <div className="w-full  px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-md mb-2">
                                    <p className='mb-2 font-bold'>Parole</p>
                                    <input className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4"
                                        required type="password" placeholder="Password"/>
                                </label>
                            </div>
                        </div>
                    </form>
                    <button className='bg-black text-white w-[200px] rounded-xl font-medium my-2 mx-auto px-10 py-3'
                        >
                        Pieslēgties
                    </button>
                    <span className='text-xl pl-2'><a href="#">Aizmirsāt paroli?</a></span>
                </div>

                <div className='w-full p-10'>
                    <h1 className='font-bold mx-auto md:text-4xl sm:text-3xl text-3xl py-2 mb-5'>Reģistrēties</h1>
                    <div className='text-semibold text-2xl'>
                        <h1 className="font-bold mb-3 text-xl">Kāpēc reģistrēties?</h1>
                        <p className="text-xl">Reģistrējoties Jums tiks pieejama pasūtīšans funkcija, ar kuras palīdzību Jūs spēsiet iegādāties mūsu preces.</p>
                    </div>
                    <a href="/Registreties"><button className='bg-black text-white w-[200px] rounded-xl font-medium mt-10 px-10 py-3'>Reģistrēties</button></a>
                </div>
            </div>
        </Container>
    )
}

export default Prof