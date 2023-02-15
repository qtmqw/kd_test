import React from 'react'
import {
    FaEnvelope,
    FaMobile,
    FaMapMarked
} from 'react-icons/fa'
import { Container } from 'react-bootstrap'

const kont = () => {
    return (
        <Container fluid className='py-10 max-w-[2000px] mx-auto'>

            <h1 className='md:text-7xl sm:text-5xl text-3xl font-bold py-[30px] text-center my-5 '>Kontakti</h1>

            <div className='w-auto flex mb-5 justify-end'>
                <div className='flex clex-col md:mx-auto xl:mx-0'>
                    <FaMobile className='xl:w-4 xl:h-9 mx-1 mt-1' /><a href="" className='md:text-md sm:text-sm xl:text-2xl xl:mr-10 lg:mr-10 md:mr-10'><p>67382030, 20005038, 29462665</p></a>
                    <FaEnvelope className='xl:w-6 xl:h-10 mx-1 mt-1' /><a href="mailto:abika@inbox.lv" className='md:text-md sm:text-sm xl:text-2xl xl:mr-10 lg:mr-10 md:mr-10 sm:mr-3'><p>abika@inbox.lv</p></a>
                    <FaMapMarked className='xl:w-6 xl:h-9 mx-1 mt-1' /><a href="" className='md:text-md sm:text-sm xl:text-2xl'><p>Vagonu iela 23, Rīga</p></a>
                </div>
            </div>

            <div className=' mx-auto mb-10'>
                <iframe className='rounded-3xl' width="100%" height='500px' frameborder="0" scrolling="yes" src="https://maps.google.com/maps?width=683&amp;height=400&amp;hl=en&amp;q=Abika&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>

            <div className='w-auto grid lg:grid-cols-2 md:grid-cols-1'>

                <div className='flex flex-col text-sm'>
                    <p><span className='font-bold'>SIA Abika adrese: </span>Vagonu iela 23, Rīga, LV-1009</p>
                    <p><span className='font-bold'>Epasts: </span> abika@inbox.lv</p>
                    <p><span className='font-bold'>Telefons: </span>67382030, 20005038, 29462665</p>
                    <p className='mt-3'><p className='font-bold'>Darba laiks:</p>Darba dienās no plkst. 9.00 līdz 17.00</p>
                    <p className='mt-3'><p className='font-bold'>Rekvizīti:</p>SIA Abika</p>
                    <p>LV–40003600614</p>
                    <p>Juridiskā adrese: Pulkveža Brieža iela 93–4, Sigulda, LV–2150   Faktiskā adrese: Vagonu iela 23, Rīga, LV-1009</p>
                    <p>Swedbanka, HABALV22</p>
                    <p>LV70HABA0551003890106</p>
                </div>

                <div class="w-full md:w-96 md:max-w-full mx-auto">
                    <div class="p-6 border border-gray-300 sm:rounded-md">
                        <h1 className='text-xl'>Parādījās jautājumi?</h1>
                        <label class="block mb-6">
                            <span class="text-gray-700">Vārds, Uzvārds</span>
                            <input name="name" type="text" class=" block w-full  mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring  focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Maikls Ozoliņš" />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-700">E-pasts</span>
                            <input name="email" type="email" class=" block  w-full  mt-1  border-gray-300  rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="abika@inbox.lv" />
                        </label>
                        <label class="block mb-6">
                            <span class="text-gray-700">Jautājums</span>
                            <textarea name="birthday" type="date" class=" block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>

                        <button type="submit" className="h-10 px-5 text-indigo-100 bg-black rounded-lg">
                            Nosūtīt
                        </button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default kont