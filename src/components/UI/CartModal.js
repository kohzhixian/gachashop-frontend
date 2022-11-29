import { Fragment } from "react";
import ReactDOM from 'react-dom'

import classes from "./CartModal.module.css";


const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
};

const portalElements = document.getElementById('overlays');

const CartModal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElements)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElements)}
    </Fragment>
}

export default CartModal;