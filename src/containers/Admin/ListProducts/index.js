import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import CheckBoxIcon from "@mui/icons-material/CheckBox"
import CancelIcon from "@mui/icons-material/Cancel"


import { api } from "../../../services/api"
import { formatCurrency } from "../../../utils/formatCurrency"
import { Container, ListProductsImg, EditIconButton } from "./styles"
import paths from "../../../constants/paths"


export default function ListProducts() {
    const [products, setProducts] = useState()
    const { push } = useHistory()

    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get("products")


            setProducts(data)
        }

        loadOrders()
    }, [])

    function isOffer(offerStatus) {
        if (offerStatus) {
            return <CheckBoxIcon style={{ color: "#17ad3e" }} />
        }
        return <CancelIcon style={{ color: "#d90118" }} />

    }
    function editProdutc(product) {
        push(paths.EditProduct, { product })
    }

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Preço</TableCell>
                            <TableCell align="center">Produto em oferta</TableCell>
                            <TableCell align="center">Imagem do Produto</TableCell>
                            <TableCell align="center">Editar Produto</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products && products.map((product) => (
                            <TableRow
                                key={product.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {product.name}
                                </TableCell>
                                <TableCell>{formatCurrency(product.price)}</TableCell>
                                <TableCell align="center">{isOffer(product.offer)}</TableCell>
                                <TableCell align="center"> <ListProductsImg src={product.url} alt="img-produtos" /></TableCell>
                                <TableCell align="center">
                                    <EditIconButton onClick={() => editProdutc(product)} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    )
}