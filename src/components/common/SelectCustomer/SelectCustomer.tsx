import useFetchCustomers from '../../../hooks/useFetchCustomers'
import Loader from '../Loader/Loader'
import style from './SelectCustomer.module.css'
import { IconX } from '@tabler/icons-react'




const SelectCustomer = () => {
    const { customers, isLoading } = useFetchCustomers()

    if(isLoading) return <Loader/>

    return (
    <div className={style.selectCustomerContainer}>
        <label htmlFor="selectCustomer">Seleccione un cliente MCC</label>
        <select name="selectCustomer" id="selectCustomer" className={style.selectCustomer}>
            <option value="">Seleccione un cliente</option>
            {
                customers.map((customer,i)=>(
                    <option key={i} value={customer.id}>{customer.name}</option>
                ))
            }
        </select>
        <button className={style.deleteCustomerBtn} title='Borrar cliente'><IconX size={20}/></button>
    </div>
    )
}

export default SelectCustomer