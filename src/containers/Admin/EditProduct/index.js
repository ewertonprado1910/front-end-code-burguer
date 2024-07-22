import React, { useEffect, useState, } from "react"
import ReactSelect from "react-select"
import { useHistory } from "react-router-dom"
import { useForm, Controller } from "react-hook-form"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify"

import { api } from "../../../services/api"
import { Container, Form, Label, LabelUpload, Input, StyledButton, ContainerInputCheckBox } from "./styles"
import { ErrorMessage } from "../../../components/ErrorMessage"


export default function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { push, location: { state: { product } } } = useHistory()

    const schema = Yup.object().shape({
        name: Yup.string().required("* Digite o nome do produto"),
        price: Yup.string().required("* Digite o preço do produto"),
        category: Yup.object().required("* Escolha a categoria do produto"),
        offer: Yup.bool()

    })
    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append("name", data.name)
        productDataFormData.append("price", data.price)
        productDataFormData.append("category_id", data.category.id)
        productDataFormData.append("file", data.file[0])
        productDataFormData.append("offer", data.offer)

        await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
            pending: "Finalizando Edição",
            success: "Produto editado com sucesso",
            error: "Algo deu errado, tente novamente"
        })
        setTimeout(() => {
            push("listar-produtos")
        }, 2000);
    }
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("categories")

            setCategories(data)
        }
        loadCategories()
    }, [])

    return (
        <Container>
            <Form noValidate onSubmit={handleSubmit(onSubmit)} >
                <div>
                    <Label>Nome</Label>
                    <Input type="text"  {...register("name")} defaultValue={product.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>
                <div>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")} defaultValue={product.price} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>
                <div>
                    <LabelUpload>
                        {fileName ? fileName :
                            <>
                                <CloudUploadIcon />
                                Upload do arquivo
                            </>
                        }
                        <input
                            type="file"
                            id="image-input"
                            accept="image/svg, image/png, image/jpeg"
                            {...register("file")}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>
                    <Controller
                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder="Categorias"
                                    defaultValue={product.category}

                                />
                            )
                        }}
                    >
                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInputCheckBox>
                    <input type="checkbox"
                        {...register("offer")}
                        defaultChecked={product.offer} />
                    <Label>Produto em oferta ?</Label>
                </ContainerInputCheckBox>

                <StyledButton>Editar Produto</StyledButton>
            </Form>


        </Container>
    )
}