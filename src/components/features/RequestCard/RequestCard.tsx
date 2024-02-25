import { useState } from 'react'
import SelectCustomer from '../../common/SelectCustomer/SelectCustomer'
import style from './RequestCard.module.css'
import { Customer } from '../../../types/customers.types'

const RequestCard = () => {
  const [customer, setCustomer] = useState<Customer | null>(null)

  const handleCustomer = (customer: Customer | null) => {
    setCustomer(customer)
  }

  return (
    <div className={style.cardContainer}>
      <h3 className={style.title}>Buscar cliente</h3>
      <div className={style.selectCustomerWrapper}>
        <SelectCustomer handleCustomer={handleCustomer}/>
      </div>
      {
        customer ? (
          <div className={style.clientDataContainer}>
            <h4 className={style.clientDataTitle}>Datos del cliente</h4>
            <div className={style.clientDataTable}>
              <div className={style.clientDataItem}>
                <span>Nombre</span>
                <p>{customer.name}</p>
              </div>
              <div className={style.clientDataItem}>
                <span>Telefono</span>
                <p>{customer.phone}</p>
              </div>
              <div className={style.clientDataItem}>
                <span>Dirección</span>
                <p>{customer.address.city}</p>
              </div>
              <div className={style.clientDataItem}>
                <span>Correo</span>
                <p>{customer.email}</p>
              </div>
            </div>
          </div>
        ):(<div className={style.noCustomerAlert}>
          <p>No hay cliente cargado</p>
        </div>)
      }
        
      <div className={style.btnContainer}>
        <button>Confirmar</button>
      </div>
    </div>
  )
}

export default RequestCard