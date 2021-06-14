import clienteAxios from 'api/config/axios'

export async function getProductDetail(id) {
    try {
        const response = await clienteAxios({
            method: 'get',
            url: `/api/items/${id}`,
            headers: {
                name: 'Juan',
                lastname: 'Bergues'
            }
        })
        if (response.status === 200) {
            return {
                status: 'OK',
                data: response.data
            }
        }
        else if (response.status === 401) {
            return {
                status: 'UNAUTHORIZED',
                message: 'Error de autorización'
            }
        }
        else {
            return {
                status: 'ERROR',
                message: 'Error al consultar'
            }
        }
    } catch (error) {
        return {
            status: 'ERROR',
            message: 'Error al consultar los datos',
        }
    }
}