import useForm from "shared/hook/useForm"

import initialState from '../RegisterForm/initialState'

import TextField from "shared/components/TextField/TextField"
import Button from "shared/components/Button/Button"

import field from "./field"

import css from './RegisterForm.module.css'

const RegisterForm=({onSubmit}) =>{
const {state,  handleChange, handleSubmit} = useForm({initialState, onSubmit})
console.log(state)

return(
   <form onSubmit={handleSubmit} className={css.form}>
      <TextField  handleChange={handleChange} {...field.name}/>
      <TextField  handleChange={handleChange}  {...field.email}/>
      <TextField  handleChange={handleChange} {...field.password}/>
      <Button type="submit">Register</Button>
   </form>
)
}

export default RegisterForm