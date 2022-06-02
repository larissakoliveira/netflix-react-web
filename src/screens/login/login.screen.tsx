import { Grid } from "@mui/material";
import { Button, Error, Input, Wrapper } from "./login.styled";
import * as yup from "yup";
import { IDataState } from "./login.types";
import { 
    useCallback,  
    useState 
} from "react";


export default function Form() {

    const passwordRegex = /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/

    const [data, setData] = useState<IDataState>({
        email: '',
        password: ''
    })

    const [error, setError] = useState('')

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
                const schema = yup.object().shape({
                    email: yup.string().required().email(),
                    password: yup.string().required().min(8).matches(passwordRegex, "Password must contain at least 1 lowercase and uppercase letter, 1 special character and 1 number!")
                })    

                await schema.validate(data)  
                setError("")

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
                <Button onClick={handleSend}>Entrar</Button>
                <Error>{error}</Error>
            </Grid>
        </Wrapper>
    )
}