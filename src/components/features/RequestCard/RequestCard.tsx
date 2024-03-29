import { useState } from 'react'
import SelectCustomer from '../../common/SelectCustomer/SelectCustomer'
import style from './RequestCard.module.css'
import { Customer } from '../../../types/customers.types'
import toast from 'react-hot-toast'
import { IconAlertOctagon } from '@tabler/icons-react'
import Button from '../../common/Button/Button'

const RequestCard = () => {
  //Estado donde se almacenara el cliente seleccionado desde el select
  const [customer, setCustomer] = useState<Customer | null>(null)

  //Función para administrar el estado de 'customer'
  const handleCustomer = (customer: Customer | null) => {
    setCustomer(customer)
  }

  //Función para ejecutar el evento submit de botón 'Confirmar'
  const handleSubmit = ()=>{

    //Si hay un cliente seleccionado se notifica al usuario que se confirmó correctamente
    if (customer) {
      toast.success(`${customer.name} confirmado correctamente`)
    //Si no se le informa que no hay cliente seleccionado
    }else {
      toast('No hay cliente seleccionado',{
        icon: <IconAlertOctagon color='#bbbb23'/>
      })
    }
  }

  return (
    <div className={style.cardContainer}>
      <h3 className={style.title}>Buscar cliente</h3>
      <div className={style.selectCustomerWrapper}>
        {/* Componente selector */}
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
          <p>No hay cliente seleccionado</p>
        </div>)
      }
        
      <div className={style.btnContainer}>
        <Button onClick={handleSubmit}>Confirmar</Button>
      </div>
    </div>
  )
}

export default RequestCard