import React from 'react'
import "./page.css"
import keyboard from './assets/desktop/image-keyboard.jpg'
import key1 from './assets/desktop/image-phone-and-keyboard.jpg'
import key2 from './assets/desktop/image-glass-and-keyboard.jpg'
import battery from './assets/shared/icon-battery.svg'
import tv from './assets/shared/icon-compatible.svg'
import bluetooth from './assets/shared/icon-bluetooth.svg'
import light from './assets/shared/icon-light.svg'
import logo from './assets/shared/logo.svg'
import pattern from './assets/shared/pattern-square.svg'

import { Button, Col, Row } from 'react-bootstrap'
const Page = () => {
    return (
        <div className='main-page'>

            <Row className='page'>

                <Row  className="mt-5 flex-nav " >

                    <Col>
                       
                        <div className='logo-svg'>

                        <img src={logo}/>
                        </div>
                    </Col>

                    <Col xs={6} md={3} lg={3} className='ci'>
                        <Button className='order-btn  '>Pre-order Now</Button>
                    </Col>
                </Row>

                <Row xs={1} sm={2} className="mt-5 center ">
                    <Col xs={2}>
                        <div className=' hero' >

                            <div className='hero-text'>

                                <h1 className='title'>typemaster keyboard</h1>
                                <p className='title-text'>
                                    Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
                                    mechanical typing experience.</p>
                            </div>

                            <div className="title-footer">

                                <Button className='hero-btn'>pre-order now</Button>
                                <p className='text'>Release on 5/27</p>

                            </div>
                        </div>

                    </Col>

                    <Col >
                    <div className='img-container'>

                        <img src={keyboard} alt='keyboard'  />
                    </div>
                    </Col>
                </Row>
                <Row xs={2}  md={2} lg={3} className="mt-5 g-5  ff" >
                    <Col xs={3} sm={5} md={4} lg={3}>
                        {/* <div className='flex'> */}

                            <div className='img-filter-container'>

                                <img  src={key1} className='img-filter' />
                            </div>
                            </Col>

                            <Col   lg={5}>
                            <div className='picture-container'>

                                <img src={key2} className='picture' />
                            </div>
                            </Col>
                        {/* </div> */}
                    

                    <Col sm={12} md={12}  >
                        <Row xs={1} sm={2} lg={1} className="p-5" >
                            <div  >
                                <h1 className='key-title'>
                                    Mechanical wireless keyboard</h1>
                            </div>
                            <div >
                                <p className='title-info'>
                                    The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety
                                    of switches and keycaps, along with reliable wireless connectivity.</p>
                            </div>

                        </Row>


                    </Col>

                </Row>
                <Row xs={1} sm={2} md={2} className='mt-5 f' >
                    <Col  className='property1'>
                        <div className='svg-container'><img src={tv} style={{ width: '35%', }} /></div>
                        <div><h1 className='poperty-title'>Highly compatible</h1></div>
                        <div><p className='poperty-info'>Easy to use and works well with all major computer brands, gaming consoles and mobile devices.
                            Plug & play, no installation or driver needed.</p></div>
                    </Col>
                    <Col className='property2'>
                        <div className='svg-container'><img src={bluetooth} style={{ width: '25%' }} /></div>

                        <div><h1 className='poperty-title'>Wireless with bluetooth</h1></div>
                        <div><p className='poperty-info'>Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away.
                            Simply plug the unifying receiver into your computer.</p></div>
                    </Col>
                    <Col className='property3'>
                        <div className='svg-container'><img src={battery} style={{ width: '35%', }} /></div>

                        <div><h1 className='poperty-title'> High capacity battery</h1></div>
                        <div><p className='poperty-info'>Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones.
                            Enjoy 40 hours of usage time between charges.
                        </p></div>
                    </Col>
                    <Col className='property4'>
                        <div className='svg-container'><img src={light} style={{ width: '40%', }} /></div>
                        <div><h1 className='poperty-title'>RGB backlit modes</h1></div>
                        <div><p className='poperty-info'>Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps
                            you type in low light conditions.</p></div>
                    </Col>

                </Row>
                
                
                <footer className='foot'>
                <p className='footer'><span className='footer-span'>Typemaster 2021 | </span> All Rights Reserved</p>
                </footer>
                

            </Row>
            <div className='pattern1'></div>
                <div className='pattern2'></div>
                
        </div>
    )
}

export default Page