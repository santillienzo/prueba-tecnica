import axios from "axios"
import { Customer } from "../types/customers.types"

const URI = 'https://jsonplaceholder.typicode.com'

//Función para realizar el fetching de los datos de los clientes
export const fetchCustomers = async (): Promise<Customer[]>=>{
    return await axios.get<Customer[]>(`${URI}/users`)
    .then(response => response.data)
    .catch(response=> response)
}