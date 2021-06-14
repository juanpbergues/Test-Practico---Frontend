import clienteAxios from 'api/config/axios'

export async function searchProducts(query) {
    try {
        const result = await clienteAxios({
            method: 'get',
            url: `/api/items?q=${query}`,
            data: {
                name: 'Juan',
                lastName: 'Bergues',
            }
        })
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