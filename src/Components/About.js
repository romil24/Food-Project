import "./AllComp.css"
import Header from "./Header";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from "react-bootstrap";
function About() {
    return (
        <>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <img className=" mt-5 imgAbout1 img-fluid" src={require('./img/about.jpg')} alt="" />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={4}  >
                        <div className="box-img-1 mt-5 ">
                            <div className="mid-img">
                                <a href="/">
                                    <img src={require('./img/p1.jpg')} alt="" />
                                </a>
                            </div>
                            <div className="body-text w-auto">
                                <h4 className="fw-bold">We Are Professionals</h4>
                                <p className="fw-medium">Optimum and elegant design of transformers complying with the customer specification.
                                    Young and energetic team of engineers with vast experience in design and development of the products. State of the art manufacturing facilities.</p>
                            </div>
                        </div>

                    </Col>
                    <Col sm={12} md={12} lg={4}  >
                        <div className="box-img-1 mt-5 ">
                            <div className="mid-img">
                                <a href="/">
                                    <img src={require('./img/p1.jpg')} alt="" />
                                </a>
                            </div>
                            <div className="body-text w-auto">
                                <h4 className="fw-bold">We Are Professionals</h4>
                                <p className="fw-medium">Optimum and elegant design of transformers complying with the customer specification.
                                    Young and energetic team of engineers with vast experience in design and development of the products. State of the art manufacturing facilities.</p>
                            </div>
                        </div>

                    </Col>
                    <Col sm={12} md={12} lg={4}  >
                        <div className="box-img-1 mt-5 ">
                            <div className="mid-img">
                                <a href="/">
                                    <img src={require('./img/p1.jpg')} alt="" />
                                </a>
                            </div>
                            <div className="body-text w-auto">
                                <h4 className="fw-bold">We Are Professionals</h4>
                                <p className="fw-medium">Optimum and elegant design of transformers complying with the customer specification.
                                    Young and energetic team of engineers with vast experience in design and development of the products. State of the art manufacturing facilities.</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default About;