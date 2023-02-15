import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Avatar } from "@material-tailwind/react";
import din from '../assets/din.png'
import { BsCart2 } from 'react-icons/bs'
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';

const Navbarf = () => {

  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);


  return (
    <Navbar className='w-full bg-gradient-to-r from-white to-blue-300 shadow-lg p-4 navbar' expand="lg">
      <Container className='max-w-full'>
        <Navbar.Brand href="/"><h1 className='text-3xl text-black font-semibold '>Abika</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="gap-2 p-2 m-auto justify-center">
            <Nav.Link href="/" className={(url === "/" ? " active text-black uppercase rounded-lg bg-gray-100" : "text-black uppercase rounded-lg hover:bg-gray-100 duration-500")}>Sākums</Nav.Link>
            <Nav.Link href="/Par_mums" className={(url === "/Par_mums" ? " active text-black uppercase rounded-lg bg-gray-100" : "text-black uppercase rounded-lg hover:bg-gray-100 duration-500")}>Par Mums</Nav.Link>
            <Nav.Link href="/Sortiments" className={(url === "/Sortiments" ? " active text-black uppercase rounded-lg bg-gray-100" : "text-black uppercase rounded-lg hover:bg-gray-100 duration-500")}>Sortiments</Nav.Link>
            <Nav.Link href="/Kontakti" className={(url === "/Kontakti" ? " active text-black uppercase rounded-lg bg-gray-100" : "text-black uppercase rounded-lg hover:bg-gray-100 duration-500")}>Kontakti</Nav.Link>
          </Nav>


            

            <Dropdown>
              <Dropdown.Toggle className='bg-transparent text-black' variant="outline-dark">Profils</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/Pieslegties">Pieslēgties</Dropdown.Item>
                <Dropdown.Item href="/Registreties">Registreties</Dropdown.Item>

                <Dropdown.Item href="/lietotajs/Profils">Lietotjas</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item >Izrakstīties</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="/Grozs" className='p-2 lg:ml-2'><BsCart2 className='w-7 h-7 text-black' /></Nav.Link>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navbarf
