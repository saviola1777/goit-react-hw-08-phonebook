
export const isUserLogin = store=>store.auth.isLoading

export const getAuth = ({auth})=>{
   const{isLoading, token}= auth ;
   return{isLoading , token}
}

export const getUser = store=>store.auth.user.email