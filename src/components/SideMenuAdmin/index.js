import React from "react"
import PropTypes from "prop-types"

import LogoutIcon from "@mui/icons-material/Logout"

import { useUser } from "../../hooks/UserContext"
import { Container, ItemContainer, ListLink } from "./styles"
import listLinks from "./list-menu"

export function SideMenuAdmin({path}) {
  const { logout } = useUser()
  return (
    <Container>
      <hr></hr>
      {listLinks.map(item => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr></hr>
      <ItemContainer style={{ position: "fixed", marginTop: "300px", color: "#fff" }}>
        <LogoutIcon />
        <ListLink to="/logincode" onClick={logout} style={{color: "#fff"}}>Sair</ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}