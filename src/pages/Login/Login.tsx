import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";

import styles from './Login.module.scss';

import { handleLogin } from "../../utils/axios";
import { LoginParams } from "../../types/requestParams";
import { UserContext } from "../../context/UserContext";
import { Header } from "../../components/Header";
import { ENTER_EMAIL, ENTER_PASSwORD, LOGIN } from "../../utils/consts";

export const Login: React.FC = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();
  
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

  useEffect(() => {
    if (userContext?.user?.username) {
      console.log('__login user', userContext?.user?.username);
      
      navigate(`/exercises`);
    }
  }, [userContext?.user]);

  const onSubmit = async (values: LoginParams) => {
    try {
      const res = await handleLogin(values);
      console.log(res);
          
      if (res?.data?.token) {
        window.localStorage.setItem('token', res?.data?.token);
        userContext?.setUser(res?.data);
      }
            
    } catch (err: any) {
      // setError(err);
      console.log(err?.response?.data);
    }
  }

  return (
    <div className={styles.root}>
      <Header />

      <div className={styles.content}>
        <Typography mb={2} variant="h5">{LOGIN}</Typography>

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
            {LOGIN}
          </Button>
        </form>
      </div>
    </div>
  );
};
