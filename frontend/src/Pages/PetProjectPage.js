import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import { Row, Col } from 'react-bootstrap';
import { MdDescription } from 'react-icons/md';
import { GoTasklist } from 'react-icons/go';
import { GiTestTubes } from 'react-icons/gi';
import ListGroup from 'react-bootstrap/ListGroup'

class PetProjectPage extends Component {

    render() {

        if (this.props.isFetching || !this.props.isFetched)
            return (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading project...</span>
                </Spinner>
            );
        //ToDo:
        // if (!this.props.petProject) return (<p>Fetching project...</p>); 
        return (
            <Container fluid>
                <Row className="courseHeader">
                    <Col>Name: {this.props.petProject.name}</Col>
                </Row>
                <Row className="shortDescription">
                    <Col>
                        {this.props.petProject.shortDescription}
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col lg={{ span: 4, offset: 1 }}>
                        <h4 className="font-weight-bold"><MdDescription /> Description:</h4>
                        {this.props.petProject.description}</Col>
                    <Col lg={{ span: 4, offset: 1 }}>
                        <h4 className="font-weight-bold"><GoTasklist /> Task</h4>
                        {this.props.petProject.task}</Col>
                </Row>
                <br />
                <Row>
                    <Col lg={{ span: 8, offset: 1 }}>
                        <h4 className="font-weight-bold"><GiTestTubes /> Tests</h4>
                        <ListGroup as="ul">
                            {this.props.petProject.tests.map(test => {
                                return (<ListGroup.Item as="a">{test}</ListGroup.Item>);
                            })}
                        </ListGroup>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PetProjectPage