import React from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import './App.css';
import {Table} from "react-bootstrap";
import {forEach} from "react-bootstrap/cjs/ElementChildren";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fov: -999,
            distance: -999,
            height: -999,
            angle: -999,
            stifness: -999,
            transition: -999
        };

    }

    generateAll() {
        this.generateProp("fov");
        this.generateProp("distance");
        this.generateProp("height");
        this.generateProp("angle");
        this.generateProp("stifness");
        this.generateProp("transition");
    }

    generateProp(property) {
            switch (property) {
                case "fov":
                    this.setState({fov: this.generateRandom(60, 110)});
                    break;
                case "distance":
                    this.setState({distance: this.generateRandom(100, 400)});
                    break;
                case "height":
                    this.setState({height: this.generateRandom(40, 200)});
                    break;
                case "angle":
                    this.setState({angle: this.generateRandom(-15, 0)});
                    break;
                case "stifness":
                    this.setState({stifness: this.generateRandom(0, 100)});
                    break;
                case "transition":
                    this.setState({transition: this.generateRandom(100, 200)});
                    break;
                default:
                    break;
            }

    }

    generateRandom(a, b) {
        const dist = b - a;
        return Math.floor((Math.random() * dist) + a);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Container>
                            <Row>
                                <Col>
                                    <Button onClick={() => this.generateAll()}>Generate All</Button>
                                </Col>
                            </Row>
                        </Container>
                        <br/><br/>
                        <Container>
                            <Table striped bordered hover variant="dark">
                                <tbody>
                                <tr>
                                    <td>Field of View</td>
                                    <td>{this.state.fov}</td>
                                    <td><Button onClick={() => this.generateProp("fov")}>Generate</Button></td>
                                </tr>
                                <tr>
                                    <td>Distance</td>
                                    <td>{this.state.distance}</td>
                                    <td><Button onClick={() => this.generateProp("distance")}>Generate</Button></td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>{this.state.height}</td>
                                    <td><Button onClick={() => this.generateProp("height")}>Generate</Button></td>
                                </tr>
                                <tr>
                                    <td>Angle</td>
                                    <td>{this.state.angle}</td>
                                    <td><Button onClick={() => this.generateProp("angle")}>Generate</Button></td>
                                </tr>
                                <tr>
                                    <td>Stifness</td>
                                    <td>{this.state.stifness}</td>
                                    <td><Button onClick={() => this.generateProp("stifness")}>Generate</Button></td>
                                </tr>
                                <tr>
                                    <td>Transition</td>
                                    <td>{this.state.transition}</td>
                                    <td><Button onClick={() => this.generateProp("transition")}>Generate</Button></td>
                                </tr>
                                </tbody>
                            </Table>
                        </Container>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
