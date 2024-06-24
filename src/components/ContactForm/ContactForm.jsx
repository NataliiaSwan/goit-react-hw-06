import { useDispatch } from "react-redux";

import { addContact } from "../../redux/contactsSlice";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

import { useId } from "react";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().max(12, "Too Long!").required("Required"),
});
function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        dispatch(addContact(values.name, values.number));
        actions.resetForm();
      }}
    >
      <Form className={css.formContainer}>
        <div className={css.box}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name:
          </label>
          <Field
            className={css.field}
            type="text"
            id={nameFieldId}
            name="name"
          />
          <ErrorMessage name="name" />
        </div>
        <div className={css.box}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number:
          </label>
          <Field
            className={css.field}
            type="text"
            htmlFor={numberFieldId}
            name="number"
          />
          <ErrorMessage name="number" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
