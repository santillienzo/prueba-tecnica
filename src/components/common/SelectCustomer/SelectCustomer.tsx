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
    const { customers, isLoading, setCustomers } = useFetchCustomers()
    const [idCustomer, setIdCustomer] = useState<Customer['id'] | null>()

    const handleChangeSelect = (event: ChangeEvent<HTMLSelectElement>)=>{
        const {value} = event.target;
        const selectedCustomer = customers.find(customer => customer.id === Number(value))
        
        
        if (selectedCustomer) {
            setIdCustomer(selectedCustomer.id)
            handleCustomer(selectedCustomer)
        }
    }

    const deleteCustomer = ()=>{
        if (idCustomer != null && idCustomer !== undefined) {
            const newCustomers = customers.filter(customer => customer.id !== idCustomer)
    
            setIdCustomer(null)
            setCustomers(newCustomers)
            handleCustomer(null)
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