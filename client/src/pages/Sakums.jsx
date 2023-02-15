import React from 'react'
import Drebes1 from '../assets/drebes1.jpg';
import Drebes2 from '../assets/drebes2.jpeg'
import Drebes3 from '../assets/drebes3.jpeg'
import Drebes4 from '../assets/drebes4.jpeg'
import Drebes5 from '../assets/drebes5.jpeg'
import { Card, Carousel, Container } from 'react-bootstrap'
import { Button } from "@material-tailwind/react"


const Saak = () => {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block w-full 2xl:h-[1000px] xl:h-[700px] lg:h-[400px] md:h-[300px] sm:h-[180px]"
            src={Drebes4}
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-full 2xl:h-[1000px] xl:h-[700px] lg:h-[400px] md:h-[300px] sm:h-[180px]"
            src={Drebes3}
          />
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-full 2xl:h-[1000px] xl:h-[700px] lg:h-[400px] md:h-[300px] sm:h-[180px]"
            src={Drebes5}
          />
        </Carousel.Item>
      </Carousel>

      <div className='max-w-auto mx-auto flex pt-20'>
        <div className='w-auto flex flex-col justify-center text-xs ml-5 '>
          <h1 className=' text-2xl font-bold py-2'>SIA Abika vairumtirdzniecības noliktava piedāvā sieviešu, vīriešu apģērbu un veļu!</h1>
          <p className=' text-base'>
            Mūsu klienti ir dažādi tir  dzniecības uzņēmumi, sākot no individuāliem komersantiem līdz veikalu tīkliem. Iepirkties SIA Abika ir izdevīgi, jo:
          </p>
          <p className='text-base'>
            <h1 className='font-bold text-base'>1. Jūs ietaupāt laiku.</h1>Salīdzinot ar iepirkšanos ārvalstīs, kur gan ceļā gan iepērkoties jāpatērē ilgs laiks, SIA Abika papildināt preču krājumus var stundas vai dažu desmitu minūšu laikā.
            <h1 className='font-bold text-base'>2. Prece atbilst LR likumdošanas prasībām.</h1>SIA Abika apģērbiem ir piestiprinātas uzlīmes latviešu valodā ar preces nosaukumu, ražotājvalsti un citu nepieciešamo informāciju.
            <h1 className='font-bold text-base'>3. Jūs ietaupāt transporta izdevumus.</h1>Latvijas klientiem ceļš līdz Rīgai ir īsāks nekā līdz citu valstu galvaspilsētām un lielpilsētām.
          </p>
        </div>
        <img className='h-full w-[650px] ' src={Drebes1} />
      </div>

      <Container fluid className='w-auto py-[5rem]'>
        <div className=' flex gap-10 mb-5 2xl:max-w-[1300px] xl:max-w-[900px] lg:max-w-[1050px] mx-auto'>
          <Card className='hover:scale-105 duration-300 bg-gray-300 mx-auto'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Sieviešu apģērbi</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className='rounded-xl bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className='hover:scale-105 duration-300 bg-gray-300 mx-auto'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Vīriešu apģērbi</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className='rounded-xl bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className='hover:scale-105 duration-300 bg-gray-300 mx-auto'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Veļa</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className='rounded-xl bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>
        </div>

        <div className='lg:flex gap-8 2xl:max-w-[1300px] xl:max-w-[900px] lg:max-w-[650px] w-[1050px] mx-auto'>
          <Card className='hover:scale-105 duration-300 bg-gray-300 '>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Apavi</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className='rounded-xl bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>

          <Card className='hover:scale-105 duration-300 bg-gray-300'>
            <Card.Img variant="top" src={Drebes2} className='p-3' />
            <Card.Body>
              <Card.Title className=' text-center border-b-2 border-gray-500 pb-3'>Aksesuāri</Card.Title>
              <div className='d-grid'>
                <Button variant="dark" size="lg" className=' rounded-xl bg-black text-white px-10 py-2 font-medium my-2'>Apskatīt</Button>
              </div>
            </Card.Body>
          </Card>

        </div>
      </Container>
    </Container>


  )
}

export default Saak