import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/_modal-bootstrap.min.scss'


class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            traeElNombre: this.props.nombre,
            traeLaFoto: this.props.srcFoto,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                <Button color="danger" onClick={this.toggle}>Abrir popUp</Button>
                <Modal isOpen={this.state.modal} centered={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <img src={this.state.traeLaFoto}/>
                        {this.state.traeElNombre}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.log}>Do Something</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;