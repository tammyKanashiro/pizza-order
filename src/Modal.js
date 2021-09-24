import pizzaMan from "./pizza-man.jpg";

const Modal = ({hideModal, show, state}) => {
    let showHideModal = show? "modal-block" : "modal-none";

    return (
        <div className={showHideModal}>
            <section className="modal-body">
                <div className="img-block">
                    <img className="modal-img" src={pizzaMan} alt=""/>
                </div>
                <h1>Thank you, {state.firstName} {state.lastName}!!</h1>
                <p>Your {state.pizza} pizza has been ordered!</p>
                <div className="modal-actions">
                    <button className="modal-btn" onClick={hideModal}>OK</button>
                </div>
            </section>
        </div>
    );
}

export default Modal;