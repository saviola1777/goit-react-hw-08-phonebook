import useForm from "shared/hook/useForm"

import initialState from './initialState'
import field from "./field"

import TextField from "shared/components/TextField/TextField"
import Button from "shared/components/Button/Button"

import css from './LoginForm.module.css'

const LoginForm=({onSubmit}) =>{
const {state,  handleChange, handleSubmit} = useForm({initialState, onSubmit})
console.log(state)

return(
   <form onSubmit={handleSubmit} className={css.form}>
      <TextField  handleChange={handleChange}  {...field.email}/>
      <TextField  handleChange={handleChange} {...field.password}/>
      <Button type="submit">Login</Button>
   </form>
)
}

export default LoginForm