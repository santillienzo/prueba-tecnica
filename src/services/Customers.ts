import { Customer } from "../types/customers.types"
import config from "../lib/config"

const {URI} = config

//Función para realizar el fetching de los datos de los clientes
export const fetchCustomers = async (): Promise<Customer[]>=>{
    return fetch(`${URI}/users`)
    .then(response => response.json())
    .catch(response=> response)
}