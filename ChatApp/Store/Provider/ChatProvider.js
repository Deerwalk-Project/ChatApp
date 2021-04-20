import React from 'react';
import AuthContext from '../Context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BASE_URL='https://react-auth-d3815-default-rtdb.firebaseio.com';

class ChatProvider extends React.Component{

    state={
        authUser:{},
        isAuthenticated :false,
        isAuthenticating : false,
        error:false,
        errorMessage :"",

    }










    render(){
        return(
            <AuthContext.Provider value={{
                ...this.state,

            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default ChatProvider;
