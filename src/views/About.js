import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className> </i>
            About DomiCare
          </CardTitle>
          <CardBody className="p-4">
            <Row justify-content>
              <Col lg="8">
                <h2 className="mt-4">DomiCare Application</h2>
                <h5 className=" mb-4">
                DomiCare is a free Android app thatprovide a direct connection between service providers and service seekers.
                </h5>
                <img
                  src="https://www.domicare-services.be/wp-content/uploads/2019/09/Domicare-services-021008-1-1024x255.png"
                  alt="my"
                />
   
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
