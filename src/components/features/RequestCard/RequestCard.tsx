import SelectCustomer from '../../common/SelectCustomer/SelectCustomer'
import style from './RequestCard.module.css'

const RequestCard = () => {
  return (
    <div className={style.cardContainer}>
      <h3 className={style.title}>Buscar cliente</h3>
      <div className={style.selectCustomerWrapper}>
        <SelectCustomer/>
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