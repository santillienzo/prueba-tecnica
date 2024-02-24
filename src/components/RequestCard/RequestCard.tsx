import { IconX } from '@tabler/icons-react'
import style from './RequestCard.module.css'

const RequestCard = () => {
  return (
    <div className={style.cardContainer}>
      <h3 className={style.title}>Buscar cliente</h3>
      <div className={style.selectCustomerContainer}>
        <label htmlFor="selectCustomer">Seleccione un cliente MCC</label>
        <select name="selectCustomer" id="selectCustomer" className={style.selectCustomer}>
          <option value="1">Cliente MCC 1</option>
          <option value="2">Joa</option>
          <option value="3">Brend</option>
          <option value="4">Tar</option>
          <option value="5">Huguit</option>
        </select>
        <button className={style.deleteCustomerBtn}><IconX size={20}/></button>
      </div>
      <div className={style.clientDataContainer}>
        <h4 className={style.clientDataTitle}>Datos del cliente</h4>
        <div className={style.clientDataTable}>
          <div className={style.clientDataItem}>
            <span>Nombre</span>
            <p>Tehuentec</p>
          </div>
          <div className={style.clientDataItem}>
            <span>Telefono</span>
            <p>2634786580</p>
          </div>
          <div className={style.clientDataItem}>
            <span>Dirección</span>
            <p>MZA</p>
          </div>
          <div className={style.clientDataItem}>
            <span>Correo</span>
            <p>tehuentec@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={style.btnContainer}>
        <button>Confirmar</button>
      </div>
    </div>
  )
}

export default RequestCard