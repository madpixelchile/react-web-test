import React, {Component} from 'react';
import { Button, Modal } from 'reactstrap';
import './../../styles/_modal-bootstrap.min.scss'

import PostDataLoad from './../BaseComponents/Data/PostData.json'

class ModalExample extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);

        this.state = {
            modal: false,

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

                <Button color="danger" onClick={this.toggle} className={this.state.toggleClass}>Abrir popUp dos</Button>

                <Modal isOpen={this.state.modal} centered={false} toggle={this.toggle} className={this.props.className}>

                <Button variant="secondary" onClick={this.handleClose}> Close X </Button>

                    {/* Test json load data */}
                    {currentModal && currentModal.map((modal) => (
                        modal.html
                    ))}

                </Modal>
            </div>
        );
    }
}

export default ModalExample;