import { ChangeEvent, useState } from 'react'
import useFetchCustomers from '../../../hooks/useFetchCustomers'
import Loader from '../Loader/Loader'
import style from './SelectCustomer.module.css'
import { IconTrash, IconX } from '@tabler/icons-react'
import { Customer } from '../../../types/customers.types'
import toast from 'react-hot-toast'


type Props = {
    handleCustomer: (customer: Customer | null) => void
}

const SelectCustomer = ({handleCustomer}:Props) => {
    //Hook personalizado para obtener nuestros clientes
    const { customers, isLoading, setCustomers } = useFetchCustomers()
    //Estado donde se almacena el id del cliente seleccionado
    const [idCustomer, setIdCustomer] = useState<Customer['id'] | null>()

    //Función para obtener el cliente seleccionado
    const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>)=>{
        const {value} = event.target;
        //Buscamos por el 'value' del select al cliente seleccionado por su id
        const selectedCustomer = customers.find(customer => customer.id === Number(value))
        
        //Si el cliente existe se setea el id y se envia mediante el handleCustomer
        if (selectedCustomer) {
            setIdCustomer(selectedCustomer.id)
            handleCustomer(selectedCustomer)
        }
    }

    //Función para eliminar el cliente seleccionado
    const deleteCustomer = ()=>{
        //Si hay un cliente seleccionado se continua con la función
        if (idCustomer != null && idCustomer !== undefined) {
            //Declaramos un nuevo array donde se filtran los clientes que tengan un valor distinto al del cliente seleccionado (es decir se elimina)
            const newCustomers = customers.filter(customer => customer.id !== idCustomer)

            //resetamos el id 
            setIdCustomer(null)
            //Actualizamos nuestra lista de clientes
            setCustomers(newCustomers)
            //Quitamos la selección de nuestro cliente
            handleCustomer(null)
            //Enviamos una notificación
            toast("Eliminado correctamente", {
                icon: <IconTrash color='#14a13c'/>
            })
        }
    }



    if(isLoading) return <Loader/>

    return (
    <div className={style.selectCustomerContainer}>
        <label htmlFor="selectCustomer">Seleccione un cliente MCC</label>
        <select
            value={idCustomer || ""}
            name="selectCustomer" 
            id="selectCustomer" 
            className={style.selectCustomer} 
            onChange={handleChangeSelect}
        >
            <option value="">Clientes</option>
            {
                customers.map((customer,i)=>(
                    <option key={i} value={customer.id}>{customer.name}</option>
                ))
            }
        </select>
        <button className={style.deleteCustomerBtn} title='Borrar cliente' onClick={deleteCustomer}><IconX size={20}/></button>
    </div>
    )
}

export default SelectCustomer