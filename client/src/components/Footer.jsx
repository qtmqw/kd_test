import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaEnvelope,
  FaMobile,
  FaMapMarked
} from 'react-icons/fa';



const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-white to-blue-300 shadow-lg max-w-full p-4 '>
      <div className="flex justify-between   ">
        <a href="/" className="flex self-center text-2xl font-semibold mr-5">Abika</a>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-3 text-sm font-semibold text-black uppercase ">Izvēlne</h2>
            <div className="text-gray-600 font-medium grid ">
                <a href="/Par_mums" className='mb-2'>Par mums</a>
                <a href="/Sortiments" className='mb-2'>Sortiments</a>
                <a href="/Kontakti" className='mb-2'>Kontakti</a>
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-black uppercase ">Kontakti</h2>
            <div className="text-gray-600 font-medium grid">
              <div className='flex clex-col mb-2'>
                <FaEnvelope className='w-4 h-5 mr-1' /><a href="mailto:abika@inbox.lv">abika@inbox.lv</a>
              </div>
              <div className='flex clex-col mb-2'>
                <FaMapMarked className='w-4 h-5 mr-1' /><a href="">Vagonu iela 23, Rīga</a>
              </div>
              <div className='flex clex-col mb-2'>
                <FaMobile className='w-4 h-5 mr-1' /><a href="">67382030, 20005038, 29462665</a>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-black uppercase ">Mēs sociālos tīklos</h2>
            <div className='flex justify-between md:w-[50%]'>
              <FaFacebookSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-gray-200 sm:mx-auto lg:my-4" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">©2021 Visas tiesības aizsargātas. Jebkāda veida satura pārpublicēšana bez rakstiskas atļaujas stingri aizliegta</span>
      </div>
    </div>
  );
};

export default Footer;
