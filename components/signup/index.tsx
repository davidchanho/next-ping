import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import styles from "./Signup.module.scss";

const schema = yup.object().shape({
  email: yup.string().email().required("Please provide a valid email address"),
});

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  if (isSubmitSuccessful) {
    return (
      <div className={styles.success}>
        Success! Now check your email to confirm your subscription.
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className={styles.formGroup}>
        <input
          className={styles.input}
          style={{
            border: errors.email ? "1px solid red" : "",
          }}
          placeholder="Your email address…"
          type="email"
          {...register("email")}
        />
        <p className={styles.errorMessage}>{errors.email?.message}</p>
      </div>

      <button className={styles.submit} type="submit">
        Notify Me
      </button>
    </form>
  );
}

export default Signup;
