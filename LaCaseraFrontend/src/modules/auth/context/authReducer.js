
export const authReducer = (state, action) =>{
    switch (action.type){
        case 'LOGIN':
            return{
                ...state,
                user:action.payload.user,
                token:action.payload.token,
            }
        case 'REGISTER':
            return {
                ...state,
                user:action.payload.user,
                token:null
            }
        case 'LOGOUT':
            return {
                ...state,
                user:null,
                token:null
            }
    }

};