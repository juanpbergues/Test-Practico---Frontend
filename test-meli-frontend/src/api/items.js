import clienteAxios from 'api/config/axios'

export async function getProductDetail(id) {
    try {
        const result = await clienteAxios.get(
            `/api/items/${id}`
        )
        return {
            status: 'OK',
            data: result.data
        }
    } catch (error) {
        return {
            status: 'ERROR',
            message: console.log(error),
        }
    }
}