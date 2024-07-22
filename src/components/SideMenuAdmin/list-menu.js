import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import paths from "../../constants/paths"

const listLinks = [
    {
        id: 1,
        label: "Pedidos",
        link: paths.Order,
        icon: BusinessCenterIcon
    },
    {
        id: 2,
        label: "Listar Produtos",
        link: paths.Products,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: "Novo Produtos",
        link: paths.NewProduct,
        icon: AddShoppingCartIcon
    }
]

export default listLinks