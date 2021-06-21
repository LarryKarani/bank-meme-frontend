//Import dependancies
import React, { useReducer } from "react";
import {IContextAction, IContextModal, IContextState} from '../interface';

//Setup a default state for the reducer
const defaultState: IContextState = {
    memes: [],
    myCustomMemes: [],
    isLoading: false,
    error: null,
}

//Set up reducer
const reducer = (state: IContextState, action: IContextAction): IContextState => {
        switch(action.type){
            case "GET_MEMES":
                return {
                    ...state,
                    memes: action.payload,
                    isLoading: false
                };

                case "GET_MEMES_FAILURE":
                    return {
                        ...state,
                        error: action.payload,
                        isLoading: false
                    };

            case "GET_MY_CUSTOM_MEMES":
                return {
                        ...state,
                        myCustomMemes: action.payload,
                        isLoading: false
                    };

            case "ADD_CUSTOM_MEME":
                return {
                    ...state,
                    myCustomMemes: [...state.myCustomMemes, action.payload],
                    isLoading: false
                }


            case "UPDATE_CUSTOM_MEME":
                const index = state.myCustomMemes.findIndex(meme => meme._id === action.payload._id);
                const newArray = [...state.myCustomMemes]
                newArray[index] = action.payload
                return {
                    ...state,
                    myCustomMemes: newArray,
                    isLoading: false
                }

            case "DELETE_CUSTOM_MEME":
                return {
                    ...state,
                    myCustomMemes: state.myCustomMemes.filter((meme) => meme._id !== action.payload),
                    isLoading: false
                };

            case "API_CALL":
                return {
                    ...state,
                    isLoading: true
                }

            default:
                return state;
        }
}

//Set up context to be used by FC | pass an empty object of type IContextModal
export const Context = React.createContext({} as IContextModal);

//Export the provider that will wrap the application
export const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return (
        <Context.Provider value={{state, dispatch }}>{children}</Context.Provider>
    )
}