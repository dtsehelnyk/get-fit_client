import React from "react";
import styles from './Registration.module.scss';
// import { Header } from "../../components/header";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export const Registration: React.FC = () => {
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
            {/* <Header title={'Registration title'} content={'Registration content'} /> */}
            <div>
                <Typography mb={2} variant="h5">Registration</Typography>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        sx={{marginBottom: '20px'}}
                        label="Email"
                        fullWidth
                        error={Boolean(errors.email?.message)}
                        helperText={errors.email?.message}
                        // TODO: add yup 
                        type="email"
                        {...register('email', { required: 'Enter your email'})}
                    />

                    <TextField
                        sx={{marginBottom: '20px'}}
                        label="Password"
                        fullWidth
                        error={Boolean(errors.password?.message)}
                        helperText={errors.password?.message}
                        // TODO: add yup 
                        type="password"
                        {...register('password', { required: 'Enter the password'})}
                    />

                    <Button
                        size="large"
                        variant="contained"
                        fullWidth
                        type="submit"
                        // onClick={() => submit}
                    >
                        Registration
                    </Button>
                </form>
            </div>
        </div>
    );
};
