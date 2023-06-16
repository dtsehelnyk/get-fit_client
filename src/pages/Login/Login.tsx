import React, { useContext } from "react";
import styles from './Login.module.scss';

import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { handleLogin } from "../../utils/axios";
import { LoginParams } from "../../types/requestParams";
import { UserContext } from "../../context/UserContext";
import { Navigate } from "react-router";

export const Login: React.FC = () => {
    const userContext = useContext(UserContext); 
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

    if (userContext?.user) {
        return <Navigate to={'/'} />
    }

    return (
        <div className={styles.root}>
            {/* <Header title={'Login title'} content={'Login content'} /> */}
            <div>
                <Typography mb={2} variant="h5">Login</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        sx={{marginBottom: '20px'}}
                        label="Email"
                        fullWidth
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        // TODO: add yup 
                        type="email"
                        {...register('email', { required: 'Enter your email' })}
                    />

                    <TextField
                        sx={{marginBottom: '20px'}}
                        label="Password"
                        fullWidth
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        // TODO: add yup 
                        type="password"
                        {...register(
                            'password',
                            { required: 'Enter the password', minLength: 6, maxLength: 16 }
                        )}
                    />

                    <Button
                        size="large"
                        variant="contained"
                        fullWidth
                        type="submit"
                        // onClick={() => submit}
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};
