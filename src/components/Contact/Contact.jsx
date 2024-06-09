import { useDispatch } from "react-redux";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.contactBox}>
        <div className={css.nameBox}>
          <IoPerson size={30} />
          <h2 className={css.name}>{name}</h2>
        </div>
        <div className={css.numberBox}>
          <FaPhone size={30} />
          <p className={css.number}>{number}</p>
        </div>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
}
