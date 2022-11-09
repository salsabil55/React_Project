import { useRef, useState } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const [enterAmountValid, setEnterAmountValid] = useState(true);
  const inputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    // return string
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount; // trnsform to number
    // mke vlidtion
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setEnterAmountValid(false);
      return;
    }
    // fter vlidtion send dt to to mel item o show it
    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button>+ Add</button>
      {!enterAmountValid && <p>Please Enter Valid Value </p>}
    </form>
  );
};

export default MealItemForm;
