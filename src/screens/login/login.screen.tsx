import { Grid } from "@mui/material";
import { Button, Error, Input, Wrapper } from "./login.styled";
import * as yup from "yup";
import { 
    useCallback, 
    useEffect, 
    useState 
} from "react";


export default function Login() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

    const handleChange = useCallback(
        ({ target }: any) => {
            setData(prevData => ({
                ...prevData,
                [target.name]: target.value
            }))
        },
        [setData]
    )

    const handleSend = useCallback(
        async () => {
            try {
                const schema = yup.object().shape({
                    email: yup.string().required().email(),
                    password: yup.string().required()
                })    
                await schema.validate(data)  
                setError("")
            } catch (error: any) {
               setError(error.errors[0])
            }
        },
        [data]
    )  

    // useEffect(
    //     () => {
    //         yup.object().shape({
    //             email: ''
    //         })
    //     },
    //     [data]
    // )

    return (
        <Wrapper container alignContent="center" justifyContent="center" >
            <Grid item={true} container xs={2} alignContent="center" justifyContent="center">
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="E-mail" 
                    onChange={handleChange} 
                />
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Senha" 
                    onChange={handleChange} 
                />
                <Button onClick={handleSend}>Entrar</Button>
                <Error>{error}</Error>
            </Grid>
        </Wrapper>
    )
}