import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom"
import { api } from "../../services/api"

import RegisterImage from "../../assets/background-register.svg"
import Img from "../../assets/background-login.svg"
import { Container, RegisterImg, ContainerRight, H1, Form, P, StylesButton } from "./styles"
import { ErrorMessage } from "../../components"
import { toast } from "react-toastify"

export function Register() {
    const schema = yup.object({
        name: yup.string().required("* O nome é obriatório"),
        email: yup.string()
            .email("* Digite um email válido")
            .required("* O email é obrigatório"),
        password: yup.string("A senha é obrigatória")
            .min(6, "* A senha deve ter no mínimo 6 caracteres").required(),
        confirmPassword: yup.string()
            .oneOf([yup.ref("password")], "* As senhas devem ser iguais")
            .required("* As senhas devem ser iguais")

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
        try {
            const { status } = await api.post('/users', {
                name: clientData.name,
                email: clientData.email,
                password: clientData.password
            }, { validateStatus: () => true })

            if (status === 201 || status === 200) {
                toast.success("Conta criada com sucesso 👌")
            } else if (status === 409) {
                toast.error("Email já cadastrado. Faça login")
            } else {
                throw new Error()
            }

        } catch (err) {
            toast.error("🤯 Falha no sistema. Tente novamente!")
        }

    }

    return (
        <Container>
            <RegisterImg src={RegisterImage} alt="logo-register" />

            <ContainerRight>
                <img src={Img} alt="logo-login" />

                <H1>Cadastre-se</H1>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <label>Nome</label>
                    <input type="text" {...register("name")} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>

                    <label>Email</label>
                    <input type="email" {...register("email")} />
                    <ErrorMessage>{errors?.email?.message}</ErrorMessage>

                    <label>Senha</label>
                    <input type="password" {...register("password")} />
                    <ErrorMessage>{errors?.password?.message}</ErrorMessage>

                    <label>Confirmar Senha</label>
                    <input type="password" {...register("confirmPassword")} />
                    <ErrorMessage>{errors?.confirmPassword?.message}</ErrorMessage>


                    <StylesButton type="submit">Criar conta</StylesButton>
                </Form>

                <P>Já possui conta? <Link to="/logincode">Clique aqui!</Link></P>

            </ContainerRight>
        </Container>

    );
}

