import axios from 'axios';
import { Dispatch } from "react";
import {IMeme, IContextState, IContextAction, ICustomMeme, IMyCustomMeme} from '../interface/index'
import {
    getMemes, apiRequest, getMemesFailure, 
    addCustomMeme, addCustomMemeFailure, 
    getMyCustomMemes, getMyCustomMemesFailure,
    updateCustomMeme, deleteCustomMeme
} from "../actions/MemeActions";
import { toast } from 'react-toastify';

const url = "http://localhost:8000/";
const headers = {
    "Content-Type": "application/json"
}

export const getAllMemes = (dispatch: Dispatch<IContextAction>, state: IContextState ): void => {

    if(!state.isLoading){
        axios.get<IMeme[]>(url, {headers})
        .then((response => {
              dispatch(apiRequest());
              dispatch(getMemes(response.data))

        })).catch((error) => {
            dispatch(getMemesFailure(error));
            console.log(error)
        })
    }
}

export const addCustomMemeService = (dispatch: Dispatch<IContextAction>, state: IContextState, payload:IMyCustomMeme): void => {
    if(!state.isLoading){
        axios.post<ICustomMeme>(`${url}fav-memes`, {...payload})
        .then((response => {
            dispatch((apiRequest()));
            dispatch(addCustomMeme(response.data));

        })).catch((error) => {
            dispatch(addCustomMemeFailure(error))
            console.log(error) 
        })
    }

}

export const editCustomMemeService = (dispatch: Dispatch<IContextAction>, state: IContextState, payload:ICustomMeme): void => {
    if(!state.isLoading){
        axios.put<ICustomMeme>(`${url}fav-memes/${payload._id}`, {...payload})
        .then((response => {
            dispatch((apiRequest()));
            dispatch(updateCustomMeme(response.data));

        })).catch((error) => {
            dispatch(addCustomMemeFailure(error))
            console.log(error) 
        })
    }

}

export const deleteCustomMemeService = (dispatch: Dispatch<IContextAction>, state: IContextState, payload:ICustomMeme): void => {
    if(!state.isLoading){
        axios.delete<ICustomMeme>(`${url}fav-memes/${payload._id}`)
        .then((response => {
            dispatch((apiRequest()));
            dispatch(deleteCustomMeme(response.data._id));

        })).catch((error) => {
            console.log(error) 
        })
    }

}

export const getCustomMemes = (dispatch: Dispatch<IContextAction>, state: IContextState ): void => {

    if(!state.isLoading){
        axios.get<ICustomMeme[]>(`${url}fav-memes`, {headers})
        .then((response => {
              dispatch(apiRequest());
              dispatch(getMyCustomMemes(response.data))

        })).catch((error) => {
            dispatch(getMyCustomMemesFailure(error));
            console.log(error)
        })
    }
}


export const searchCustomMeme = (dispatch: Dispatch<IContextAction>, state: IContextState , urlParam: string): void => {

    if(!state.isLoading){
        axios.get<ICustomMeme[]>(`${url}fav-memes-search?caption=${urlParam}`, {headers})
        .then((response => {
              dispatch(apiRequest());
              dispatch(getMyCustomMemes(response.data));

        })).catch((error) => {
            dispatch(getMyCustomMemesFailure(error));
            console.log(error)
        });
    };
};
