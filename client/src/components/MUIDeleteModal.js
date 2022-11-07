import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

export default function MUIDeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList(event) {
        store.deleteMarkedList();
    }
    function handleCloseModal(event) {
        store.unmarkListForDeletion();
    }

    return (
        <Modal
            open={store.listMarkedForDeletion !== null}
        >
            <Box>
                <div className="modal-dialog">
                <header className="dialog-header">
                    Delete the {name} Playlist?
                </header>
                <div id="modal-button">
                    <button
                        id="dialog-yes-button"
                        className="delete-list-button"
                        onClick={handleDeleteList}
                    >Confirm</button>
                    <button
                        id="modal-button"
                        className="delete-list-button"
                        onClick={handleCloseModal}
                    >Cancel</button>
                </div>
            </div>
            </Box>
        </Modal>
    );
}