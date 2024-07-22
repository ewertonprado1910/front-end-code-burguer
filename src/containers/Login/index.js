import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from "react-toastify"
import { Link, useHistory } from "react-router-dom"

import { api } from "../../services/api"
import { useUser } from "../../hooks/UserContext"


import ImgLogo from "../../assets/code-burguer.svg"
import Img from "../../assets/background-login.svg"
import { Container, ImgLeft, ContainerRight, H1, Form, P, StylesButton} from "./styles"
import { ErrorMessage } from "../../components"

export function Login() {
    const history = useHistory()
    const { putUserData } = useUser()

    const schema = yup.object({
        email: yup.string()
            .email("* Digite um email válido")
            .required("* O email é obrigatório"),
        password: yup.string("A senha é obrigatória")
            .min(6, "* A senha deve ter no mínimo 6 caracteres").required(),
    })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)

    })

    const onSubmit = async clientData => {
        const { data } = await toast.promise(
            api.post('/session', {
                email: clientData.email,
                password: clientData.password
            }),
            {
                pending: 'Validando seus dados',
                success: 'Seja bem-vindo(a)👌',
                error: 'Email ou senha incorretos 🤯'
            }
        )
        putUserData(data)

        setTimeout(() => {
            if (data.admin) {
                history.push("/pedidos")
            } else {
                history.push("/")
            }
        }, 1000)
    }

    return (
        <Container>
            <ImgLeft src={ImgLogo} alt="logo" />

            <ContainerRight>
                <img src={Img} alt="logo-login" />

                <H1>Login</H1>

                <Form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <label>Email</label>
                    <input type="email" {...register("email")} />
                    <ErrorMessage>{errors?.email?.message}</ErrorMessage>


                    <label>Senha</label>
                    <input type="password" {...register("password")} />
                    <ErrorMessage>{errors?.password?.message}</ErrorMessage>

                    <StylesButton type="submit">Entrar</StylesButton>
                </Form>

                <P>Não possui conta? <Link to="/cadastrocode"> Clique aqui!</Link></P>

            </ContainerRight>
        </Container>

    );
}

