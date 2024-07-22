import React from "react"
import { useHistory } from "react-router-dom"

import { useUser } from "../../hooks/UserContext"
import ImgPerson from "../../assets/people.svg"
import ImgCart from "../../assets/carrinho.svg"

import {
    Container,
    ContainerLeft,
    LinkPage,
    ContainerRigth,
    ContainerText,
    Line,
    LinkPageExit
} from "./styles"


export function Header() {
    const {logout, userData} = useUser()
    const { push, location: { pathname } } = useHistory()

    const logoutUser = () => {
        logout()
        push("/logincode")
    }

    return (
        <Container>
            <ContainerLeft>
                <LinkPage onClick={() => push("/")} isActive={pathname === "/"}>
                    Home
                </LinkPage>

                <LinkPage onClick={() => push("/produtos")} isActive={pathname.includes("/produtos")}>
                    Ver Produtos
                </LinkPage>

            </ContainerLeft>

            <ContainerRigth>
                <LinkPage onClick={() => push("/carrinho")} >
                    <img src={ImgCart} alt="img-carrinho" />
                </LinkPage>
                <Line></Line>
                <LinkPage>
                    <img src={ImgPerson} alt="img-person" />
                </LinkPage>

                <ContainerText>
                    <p> Olá, {userData.name}</p>
                    <LinkPageExit onClick={logoutUser}>Sair</LinkPageExit>
                </ContainerText>

            </ContainerRigth>
        </Container>
    )
}