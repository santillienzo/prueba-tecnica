import { Customer } from "../types/customers.types"

const URI = 'https://jsonplaceholder.typicode.com'

//Función para realizar el fetching de los datos de los clientes
export const fetchCustomers = async (): Promise<Customer[]>=>{
    return fetch(`${URI}/users`)
    .then(response => response.json())
    .catch(response=> response)
}