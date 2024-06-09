import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too short!")
    .required("This field must be filled in!"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("This field must be filled in!"),
});

export default function ContactForm() {
  const initialValues = { name: "", number: "" };
  const fieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // onAdd({ ...values, id: nanoid(5) });
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field className={css.input} name="name" id={`${fieldId}-name`} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field className={css.input} name="number" id={`${fieldId}-number`} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
