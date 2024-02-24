import axios from "axios"
import { Customer } from "../types/customers.types"

//Función para realizar el fetching de los datos de los clientes
export const fetchCustomers = async (): Promise<Customer[]>=>{
    return await axios.get<Customer[]>('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data)
    .catch(response=> response)
}