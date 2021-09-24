import React, { useState } from "react";
import Modal from "./Modal";


const OrderForm = () => {
  const [shadow, setShadow] = useState("")
  const [show, setShow] = useState(false)
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pizza: "Margherita",
    comments: ""
  })

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });

  }

  const showModal = (event) => {
    console.log('Submit');
    console.log(state.firstName);
    console.log(state.lastName);
    console.log(state.pizza);
    console.log(state.comments);
    setShow(true);
    setShadow(" shadow");
  }

  const hideModal = () => {
      setShow(false);
      setShadow("");
      setState({
        ...state,
        firstName: "",
        lastName: "",
        email: "",
        pizza: "Margherita",
        comments: ""
      });
  }

  return (
    <div className="page-background">
      <Modal show={show} hideModal={hideModal} state={state}/>

      <form className={"pizzaForm" + shadow}>
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" value={state.firstName} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" value={state.lastName} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={state.email} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="pizza">Choose your pizza</label>
          <select name="pizza" onChange={handleChange} value={state.pizza}>
                  <option value="Margherita">Margherita</option>
                  <option value="Pepperoni">Pepperoni</option>
                  <option value="Hawaiian">Hawaiian</option>
                  <option value="Supreme">Supreme</option>
              </select>
        </div>
        <div className="form-field form-field--comments">
          <label htmlFor="comments">Comments</label>
          <textarea name="comments" cols="30" rows="10" value={state.comments}  onChange={handleChange}></textarea>
        </div>

        <div className="form-actions">
          <input type="button" value="Order Now" onClick={showModal}/>
        </div>
        
      </form>
    </div>
  );
}

  export default OrderForm;