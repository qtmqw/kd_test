import React, { useState } from "react";
import { FaArrowRight } from 'react-icons/fa'
import { Container } from 'react-bootstrap'
import { Button } from "@material-tailwind/react"
import { useNavigate } from "react-router-dom";


const reg = () => {

  return (
    <Container className='py-10 max-w-[2000px] mx-auto'>
      <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold py-[30px] text-center my-5'>Reģistrēšanās</h1>

        <div className='w-[600px] mb-4 bg-gray-300 p-10 rounded-lg relative mx-auto'>
          <h1 className='font-bold mx-auto md:text-4xl sm:text-3xl text-3xl py-2 mb-5'>Reģistrēties</h1>
          <form>
            <div className="mb-6">
              <div className="px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-md">
                  <p className='mb-2 font-bold'>Lietotājvārds</p>
                  <input className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3"
                    required type="text" placeholder='Lietotājvārds' 
                  />
                </label>
              </div>
            </div>

            <div className="mb-6">
              <div className="px-3 mb-6 md:mb-0">
                <label htmlFor="email" className="block uppercase tracking-wide text-gray-700 text-md mb-2 font-bold">
                  E-pasts</label>
                <input className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4 mb-3"
                  required type="text" placeholder='E-pasts' 
                />

              </div>
            </div>

            <div className="flex flex-wrap mb-6 ">
              <div className="w-full  px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-md mb-2">
                  <p className='mb-2 font-bold'>Parole</p>
                  <input className="w-full mx-auto bg-white text-gray-700 border border-black rounded py-3 px-4"
                    required type="password" placeholder='Parole' 

                  />
                  <span className=" text-xs font-bold text-gray-500">Parolē jābūt vismaz 6 simboliem</span>
                </label>
              </div>
            </div>
          </form>
          <Button className='bg-black text-white w-auto rounded-xl font-medium my-2 mx-auto px-10 py-3'
            >
            Reģistrēties
          </Button>
          <div className='absolute bottom-5 right-5'>
            <a href="/"><Button className='bg-black text-white w-auto rounded-xl font-medium  mx-auto px-10 py-3' ><FaArrowRight className='w-4 h-3 mx-1' /></Button></a>
          </div>
        </div>
    </Container>
  )
}

export default reg