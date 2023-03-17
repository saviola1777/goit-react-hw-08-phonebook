import axios from "axios";

const instance = axios.create({                         //
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {                                                    // в цю зміну додаємо унікальний токен доступу до захищених ресурсів.(це як пароль до твоїх даних)
  if (token) {                                                                  // якщо є токен строка яку на поветає бекенд
    return (instance.defaults.headers.authorization = `Bearer ${token}`);   //токен передаємо в авторизейшен в нашому бекенді
  }
  instance.defaults.headers.authorization = '';
}

export const signup = async data => {        // ця зміна відповідає за реєстрацію
  const { data: result } = await instance.post('/users/signup', data);    // { data: result } це значить що ми data переіменовуємо в result
  setToken(result.token);
  return result;
};


export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  // console.log(result)                                        // плодивитися результат приходить токен і юсер з імям і паролем
  return result;
};


export const getCurrent = async (token) => {                     //передаємо токен
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  }
  catch (error) {
    setToken();
    throw error;
  }
}
 export const logout = async ()=>{
  const {data}= await instance.post('/users/logout')
  setToken();
  return data
 }

export default instance