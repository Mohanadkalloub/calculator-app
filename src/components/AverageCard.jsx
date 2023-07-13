import { useContext } from "react";
import MarksController from "../controllers/MarksController";
import { AppContext } from "../context/app_context";

const AverageCard = (props) => {
  const controller = new MarksController();
  const context = useContext(AppContext);
  const onDeleteHanlder = async () => {
    const deleteted = await controller.delete(props.mark.id);
    if (deleteted) {
      context.deleteMark(props.mark.id);
    }
  };
  return (
    <section className="card">
      <article className="card-top-content">
        <div className="card-top-content-leading">
          <span className="name-first-char">S</span>
          <div className="student-info">
            <span>{props.mark.name}</span>
            <span>{props.mark.id}</span>
          </div>
        </div>
        <a className="delete-btn" onClick={onDeleteHanlder}>
          <i className="fa-solid fa-xmark delete-row"></i>
        </a>
      </article>
      <article className="card-marks">
        <section className="mark-info">
          <span>Mid-Term</span>
          <span>{props.mark.mid}</span>
        </section>
        <section className="mark-info">
          <span>Final-Term</span>
          <span>{props.mark.final}</span>
        </section>
        <section className="mark-info">
          <span>Activities</span>
          <span>{props.mark.activities}</span>
        </section>
      </article>
    </section>
  );
};
export default AverageCard;
