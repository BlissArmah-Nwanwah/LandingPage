import React from 'react'
import "./page.css"
import keyboard from './assets/desktop/image-keyboard.jpg' 

import { Button, Col, Container, Row } from 'react-bootstrap'
const Page = () => {
    return (
        <Container className='layout' >
            <Row className="justify-content-space-between mt-3">
                <Row xs={1} sm={2} className="center" >

                    <Col>
                        <>
                            <div className='trademark-container'> <span className='trademark'>TM</span>
                            </div>
                        </>
                    </Col>
                    <Col>
                        <Button className='order-btn'>pre-order now</Button>
                    </Col>
                </Row>

                <Row xs={1} sm={2} className="mt-5 center">
                    <Col className='hero-title'>
                        <h1 className='title'>typemaster keyboard</h1>
                        <p className='title-text'>
                            Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
                            mechanical typing experience.</p>

                                <Row xs={2} className="title-footer">
                                    
                        <Button className='hero-btn'>pre-order now</Button>
                        <p className='text'>Release on 5/27</p>
                            
                                </Row>

                    </Col>
                    <Col >
                    <div className='img-container'>
                        <img src={keyboard} alt='keyboard' className='img-container' />
                    </div>
                    </Col>

                </Row>


            </Row>
        </Container>

    )
}

export default Page