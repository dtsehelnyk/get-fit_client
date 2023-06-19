import { FC } from "react";
import styles from './Registration.module.scss';
// import { Header } from "../../components/header";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Header";
import { ENTER_EMAIL, ENTER_PASSwORD, REGISTER } from "../../utils/consts";

export const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: "onChange",
  });

  const onSubmit = (values: any) => {
    console.log(values);
  }

  return (
    <div className={styles.root}>
      <Header />
        {/* <Header title={'Registration title'} content={'Registration content'} /> */}
      <div className={styles.content}>
        <Typography mb={2} variant="h5">{REGISTER}</Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={styles.field}
            label="Email"
            fullWidth
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            // TODO: add yup 
            type="email"
            {...register('email', { required: ENTER_EMAIL })}
          />

          <TextField
            className={styles.field}
            label="Password"
            fullWidth
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            // TODO: add yup 
            type="password"
            {...register('password', { required: ENTER_PASSwORD })}
          />

          <Button
            size="large"
            variant="contained"
            fullWidth
            type="submit"
            // onClick={() => submit}
          >
            {REGISTER}
          </Button>
        </form>
      </div>
    </div>
  );
};
