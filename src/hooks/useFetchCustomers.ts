import { useEffect, useState } from 'react'
import { Customer } from '../types/customers.types'
import { fetchCustomers } from '../services/Customers'

const useFetchCustomers = () => {
  // Estado para guardar los clientes
  const [customers, setCustomers] = useState<Customer[]>([])
  // Estado para controlar la carga de los datos
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // Función para cargar los clientes
  useEffect(()=>{
    fetchCustomers().then(response => setCustomers(response))
    .catch(response=> console.log(response))
    .finally(() => setIsLoading(false))
  },[])

  //Retornamos los datos necesarios
  return {customers, isLoading, setCustomers}
}

export default useFetchCustomers