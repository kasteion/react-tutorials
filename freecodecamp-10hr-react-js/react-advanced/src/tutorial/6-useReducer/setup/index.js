import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUES" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal
          closeModal={closeModal}
          modalContent={state.modalContent}
        ></Modal>
      )}
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={name} onChange={handleChange}></input>
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map((person) => (
        <div className="item" key={person.id}>
          {person.name}
          <button
            onClick={() => {
              dispatch({ type: "DELETE_ITEM", payload: person.id });
            }}
          >
            Delete Item
          </button>
        </div>
      ))}
    </>
  );
};

export default Index;
