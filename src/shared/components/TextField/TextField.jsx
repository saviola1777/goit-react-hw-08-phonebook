import { useMemo } from "react"
import { nanoid } from "nanoid"
import css from './TextField.module.css'

const TextField = ({label , handleChange , ...props})=>{
 const id =useMemo(()=>nanoid(),[])
   return (
   <div className={css.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={handleChange} {...props}/>
   </div>
 )
}
export default TextField

// це наша форма куди ми передаємо назву лейбла функцію при змні поля і пропси і імпортуємо у форму 
// { useMemo щоб не геренувати завжли id це функція яка запмятовує результат і міняє тільки тоді коли треба