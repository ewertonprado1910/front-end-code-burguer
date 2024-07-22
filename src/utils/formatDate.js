const formatDate = (data) => {
   return new Date(data).toLocaleDateString("pt-Br", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
   })
}

export default formatDate