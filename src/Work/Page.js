import React from 'react'
import "./page.css"
import keyboard from './assets/desktop/image-keyboard.jpg'
import key1 from './assets/desktop/image-phone-and-keyboard.jpg'
import key2 from './assets/desktop/image-glass-and-keyboard.jpg'
import battery from './assets/shared/icon-battery.svg'

import { Button, Col, Container, Row } from 'react-bootstrap'
const Page = () => {
    return (
            <Row className="page-container">
                <Row xs={1} sm={2} className="nav " >

                    <Col>
                        <>
                            <div className='trademark-container'> <span className='trademark'>TM</span>
                            </div>
                        </>
                    </Col>
                    <Col>
                        <Button className='order-btn '>pre-order now</Button>
                    </Col>
                </Row>

                <Row xs={1} sm={2} className="mt-5 center">
                    <Col className='hero-title hero'>
                        <h1 className='title'>typemaster keyboard</h1>
                        <p className='title-text'>
                            Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
                            mechanical typing experience.</p>

                        <Row xs={2} className="title-footer">

                            <Button className='hero-btn'>pre-order now</Button>
                            <p className='text'>Release on 5/27</p>

                        </Row>

                    </Col>
                    <Col className='hero2' >
                        <div className='img-container'>
                            <img src={keyboard} alt='keyboard' className='img-container' />
                        </div>
                    </Col>

                </Row>
                <Row xs={1} md={2} className="mt-5" >
                    <Col>
                        <div className='flex'>

                            <div className='img-filter-container'>

                                <img src={key1} className='img-filter' />
                            </div>
                            <div className='pic'>

                                <img src={key2}  />
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className='key-container'>

                            <h1 className='key-title'>
                                Mechanical wireless keyboard</h1>
                            <p className='title-info'>
                                The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety
                                of switches and keycaps, along with reliable wireless connectivity.</p>
                        </div>

                    </Col>

                </Row>
                <Row md={4}>
                    <Col className='property1'>
                    <div className='svg-container'><img src={battery} /></div>
                        <div><h1 className='poperty-title'>Highly compatible</h1></div>
                        <div><p className='poperty-info'>Easy to use and works well with all major computer brands, gaming consoles and mobile devices. 
  Plug & play, no installation or driver needed.</p></div>
                    </Col>
                    <Col className='property2'>
                    <div className='svg-container'><img src={battery} /></div>

                        <div><h1 className='poperty-title'>Highly compatible</h1></div>
                        <div><p className='poperty-info'>Easy to use and works well with all major computer brands, gaming consoles and mobile devices. 
  Plug & play, no installation or driver needed.</p></div>
                    </Col>
                    <Col className='property3'>
                    <div className='svg-container'><img src={battery} /></div>

                        <div><h1 className='poperty-title'>Highly compatible</h1></div>
                        <div><p className='poperty-info'>Easy to use and works well with all major computer brands, gaming consoles and mobile devices. 
  Plug & play, no installation or driver needed.</p></div>
                    </Col>
                    <Col className='property4'>
                    <div className='svg-container'><img src={battery} /></div>
                        <div><h1 className='poperty-title'>Highly compatible</h1></div>
                        <div><p className='poperty-info'>Easy to use and works well with all major computer brands, gaming consoles and mobile devices. 
  Plug & play, no installation or driver needed.</p></div>
                    </Col>
                </Row>
            <div className='top-design'></div>
            <div className='bottom-design'></div>
            </Row>


    )
}

export default Page