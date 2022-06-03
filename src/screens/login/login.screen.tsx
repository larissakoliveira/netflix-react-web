import { Grid } from "@mui/material";
import { Wrapper } from "./login.styled";
import { IDataState } from "./login.types";
import {loginSchema} from "./login.schema";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import ErrorMessage from "../../components/error-message/error-message";
import { 
    useCallback,  
    useState 
} from "react";


export default function Form() {

    const [data, setData] = useState<IDataState>({
        email: '',
        password: ''
    })

    const [error, setError] = useState<string>('')

    const handleChange = useCallback(
        ({ target }: React.ChangeEvent<HTMLInputElement>) => {
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
                await loginSchema.validate(data, {abortEarly: false}) 
                setError('')

            } catch (error: any) {
               setError(error.errors[0])
            }
        },
        [data]
    )  

    return (
        <Wrapper 
            container 
            alignContent="center" 
            justifyContent="center" 
        >
            <Grid item xs={2}>
               
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
                <ErrorMessage message={error}/>
                <Button onClick={handleSend}>Entrar</Button>
                
            </Grid>
        </Wrapper>
    )
}