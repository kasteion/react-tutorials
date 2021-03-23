// reducer function
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "Item Added",
      };
    case "NO_VALUES":
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Please enter value",
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        people: state.people.filter((person) => person.id !== action.payload),
        isModalOpen: true,
        modalContent: "Item deleted",
      };
    default:
      throw new Error("No matching action type");
  }
};
