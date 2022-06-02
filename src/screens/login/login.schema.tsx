import * as yup from "yup";
// import { regexPassword } from "../../utils/regex/password";

export const loginSchema = yup.object().shape({
    email: yup.string().required().email(),
    // password: yup.string().required().min(8).matches(regexPassword, "Password must contain at least 1 lowercase and uppercase letter, 1 special character and 1 number!")
})