import { Grid } from "@mui/material";
import { Wrapper } from "./login.styled";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import ErrorMessage from "../../components/error-message/error-message";
import { regexPassword } from "../../utils/regex/password";
import * as yup from "yup";
import { IDataState } from "./login.types";
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
    console.log(error)

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
                    password: yup.string().required().min(8).matches(regexPassword, "Password must contain at least 1 lowercase and uppercase letter, 1 special character and 1 number!")
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
                <ErrorMessage message={error}/>
            </Grid>
        </Wrapper>
    )
}