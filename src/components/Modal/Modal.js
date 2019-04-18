import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './../../styles/_modal-bootstrap.min.scss'

import PostDataLoad from './../BaseComponents/Data/PostData.json'


class ModalExample extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);

        this.state = {
            modal: false,
            traeElNombre: this.props.nombre,
            traeLaFoto: this.props.srcFoto,

            bringModalContent: '',
            toggleClass:       '',
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal,
            bringModalContent: this.props.modalContent,
            toggleClass:       this.props.classToToggle,
        }));
    }

    handleClose() {
        this.setState({ modal: false });
      }

    render() {
       
        const currentModal = PostDataLoad.filter((modal) => 
    { 
        return (this.state.bringModalContent === modal.type ? modal : "")
    })
        return (
            console.log(currentModal),
            
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                {/* <Button color="danger" onClick={this.toggle}>Abrir popUp</Button> */}

                <Button color="danger" onClick={this.toggle} className={this.state.toggleClass}>Abrir popUp dos</Button>

                <Modal isOpen={this.state.modal} centered={false} toggle={this.toggle} className={this.props.className}>

                <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>

                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <img src={this.state.traeLaFoto} alt="Imagen"/>
                        {this.state.traeElNombre}
                        

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.log}>Do Something</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>

                    <p>
                        {currentModal && currentModal.map((modal)=> (
                            modal.html
                        ))}
                    </p>

                </Modal>
            </div>
        );
    }
}

export default ModalExample;