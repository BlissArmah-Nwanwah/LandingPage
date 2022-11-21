import React from 'react'
import "./page.css"
import {Button, Col, Container, Row} from 'react-bootstrap'
const Page = () => {
  return (
    <Container>
        <Row className="justify-content-center">
            <Col>
            <div></div>
            </Col>
            <Col>
            <Button>pre-order now</Button>
            </Col>
        </Row>
    </Container>
    
  )
}

export default Page