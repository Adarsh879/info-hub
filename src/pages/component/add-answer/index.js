import React, { useState, useContext } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import { FetchContext } from "../../../store/fetch";

import TextArea from "../textarea/textarea";
import Button from "../button/button";

import styles from "./add-answer.module.css";

const AddAnswer = ({ id, setQuestion }) => {
  const { authAxios } = useContext(FetchContext);

  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{ text: "" }}
      onSubmit={async (values, { setStatus, resetForm }) => {
        setLoading(true);
        try {
          const { data } = await authAxios.post(`/answer/${id}`, values);
          setQuestion(data);
          resetForm({});
        } catch (error) {
          setStatus(error.response.data.message);
        }
        setLoading(false);
      }}
      validationSchema={Yup.object({
        text: Yup.string()
          .required("Body is missing.")
          .min(15, "Body must be at least 15 characters.")
          .max(30000, "Body cannot be longer than 30000 characters."),
      })}
    >
      {({
        values,
        errors,
        touched,
        status,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form className={styles.container} onSubmit={handleSubmit}>
          <h2>Your answer</h2>
          <TextArea
            name="text"
            autoComplete="off"
            value={values.text}
            onChange={handleChange}
            onBlur={handleBlur}
            hasError={touched.text && errors.text}
            errorMessage={errors.text && errors.text}
            className={styles.textarea}
          />
          <p className={styles.status}>{status}</p>
          <div className={styles.button}>
            <Button
              type="submit"
              primary
              isLoading={loading}
              disabled={isSubmitting}
            >
              Post Your Answer
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddAnswer;
