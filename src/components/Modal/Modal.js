import React, {Component} from 'react';
import { Button, Modal } from 'reactstrap';
import 'src/styles/_modal.scss'

// import PostDataLoad from 'src/components/BaseComponents/Data/PostData.json'

import {ModalOnlyText} from './Modals/OnlyText/';
import {ModalClickToCall} from './Modals/ClickToCall/';
import ModalSlider from './Modals/TypeSlider/';

class ModalExample extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);

        this.state = {
            modal: false,

            bringModalContent: '',
            toggleClass:       '',
            bringModalStructure: this.props.modalStructure,
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
       
    //     const currentModal = PostDataLoad.filter((modal) => 
    // { 
    //     return (this.state.bringModalContent === modal.type ? modal : "")
    // })  

        const isModalStructure = this.state.bringModalStructure;
        const withoutStrcuture = 'Not structure asigned here.';

        return (
            // console.log(currentModal),

            <div>

                <Button color="danger" onClick={this.toggle} className={this.state.toggleClass}>{this.props.buttonText}</Button>

                <Modal isOpen={this.state.modal} centered={false} toggle={this.toggle} className={this.props.className}>

                <Button variant="secondary" onClick={this.handleClose}> Close X </Button>

                    {/* Test json load data MUST BE INSIDE MODAL LAYOUT STRUCTURE COMPONENTS*/}
                    {/* {currentModal && currentModal.map((modal) => (
                        modal.html
                    ))} */}


                    {
                        // Modal structure types
                        (() => {
                            switch(isModalStructure) {
                            case 'ModalOnlyText':
                                return <ModalOnlyText />;
                            case 'ModalClickToCall':
                                return <ModalClickToCall />;
                            case 'ModalSlider':
                            return <ModalSlider />
                            default:
                                return withoutStrcuture;
                            }
                        })()
                    }



                </Modal>
            </div>
        );
    }
}

export default ModalExample;