import { useContext, useRef } from "react";
import FormGroup from "./FormGroup";
import Mark from "../models/Mark";
import MarksController from "../controllers/MarksController";
import { AppContext } from "../context/app_context";

const AverageForm = () => {
  const nameRef = useRef();
  const midTermRef = useRef();
  const finalRef = useRef();
  const activitiesRef = useRef();
  const context = useContext(AppContext);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (checkData()) {
      // call function save from MarksController :
      const mark = getMark();
      const controller = new MarksController();
      const id = await controller.create(mark);
      if (id != null) {
        mark.id = id;
        context.addMark(mark);
      }
    }
    // console.log(nameRef.current.value);
  };
  const checkData = () => {
    if (
      nameRef.current.value != "" &&
      midTermRef.current.value != "" &&
      finalRef.current.value != "" &&
      activitiesRef.current.value != ""
    ) {
      return true;
    }
    alert("Enter required data");
    return false;
  };
  const getMark = () => {
    return new Mark(
      nameRef.current.value,
      midTermRef.current.value,
      finalRef.current.value,
      activitiesRef.current.value
    );
  };
  return (
    <form className="marks-form" onSubmit={onSubmitHandler}>
      <FormGroup
        label="Student Name"
        type="text"
        placeholder="Enter Student Name"
        ref={nameRef}
      />
      <FormGroup
        label="Mid Term"
        type="number"
        placeholder="Enter Mark"
        ref={midTermRef}
      />
      <FormGroup
        label="Final"
        type="number"
        placeholder="Enter Final"
        ref={finalRef}
      />
      <FormGroup
        label="Activities"
        type="number"
        placeholder="Enter Activities"
        ref={activitiesRef}
      />
      <button type="submit" className="form-btn">
        SAVE
      </button>
    </form>
  );
};

export default AverageForm;
