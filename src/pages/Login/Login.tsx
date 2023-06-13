import React from "react";
import styles from './Login.module.scss';
// import { Header } from "../../components/header";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { log } from "console";

export const Login: React.FC = () => {
    
    return (
        <div className={styles.root}>
            {/* <Header title={'Login title'} content={'Login content'} /> */}
            <div>
                <Typography mb={2} variant="h5">Login</Typography>

                <TextField
                    className={styles.field}
                    label="Email"
                    // error
                    // helperText="Wrong email"
                    fullWidth
                />

                <TextField
                    className={styles.field}
                    label="Password"
                    // error
                    // helperText="Wrong email"
                    fullWidth
                />

                <Button size="large" variant="contained" fullWidth>
                    Login
                </Button>
            </div>
        </div>
    );
};
