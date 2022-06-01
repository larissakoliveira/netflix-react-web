import { useCallback, useEffect, useState } from "react";
import { Wrapper } from "./login.styled";
import { Grid } from "@mui/material";

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = useCallback(
        ({ target }: any) => {
            setData(prevData => ({
                ...prevData,
                [target.name]: target.value
            }))
        },
        [setData]
    )

    useEffect(
        () => {
            console.log(data)
        },
        [data]
    )

    return (
        <Wrapper container justifyContent="center" alignContent="center">
            <Grid container xs={4} alignContent="center" justifyContent="center">
                <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
                <input type="password" placeholder="Senha" name="password" onChange={handleChange} />
                <button>Entrar</button>
            </Grid>
        </Wrapper>
    )
}