import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AuthContext from '../auth'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 200,
    bgcolor: 'background.paper',
    border: '3px solid #000',
    boxShadow: 100,
    p: 4,
};

export default function MUIAccountErrorModal() {
    const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    
    function handleCloseModal(event) {
        auth.closeModal();
    }
    let modalClass = "modal";
    if (auth.error === true) {
        modalClass += " is-visible";
    }

    let errMsg = "";
    if (auth.errMessage !== null) {
        errMsg = auth.errMessage;
    }


    return (
        <Modal
            open={auth.error !== false}
        >
            <Box>
            <div
            id="account-error-modal"
            className={modalClass}
            data-animation="slideInOutLeft">
            <div
                id='account-error-root'
                className="modal-root">
                <div
                    id="account-error-modal-header"
                    className="modal-north"> Account Error
                </div>

                <div className="modal-center">
                    <header className="dialog-header">
                        Error: {errMsg}
                    </header>
                </div>
                <div
                    id="account-error-modal-bottom"
                    className="modal-south">
                        <div id="modal-button">
                        <button
                            id="dialog-yes-button"
                            className="modal-button"
                            onClick={handleCloseModal}
                        >Confirm</button>
                    </div>
                </div>

            </div>
        </div>
            </Box>
        </Modal>
    );
}