import { Dispatch } from "react"

export interface IMeme {
    ID: number;
    bottomText: string;
    image: string;
    name: string;
    rank: number;
    tags: string;
    topText: string;
}

export interface IMyCustomMeme {
    caption: string;
    tag: string;
    image: string;
}

export interface ICustomMeme {
    _id: string
    caption: string;
    tag: string;
    image: string;
}

export interface IContextState {
    memes: IMeme[];
    myCustomMemes: ICustomMeme[];
    isLoading: boolean;
    error: any
}

export interface IContextModal {
    state: IContextState;
    dispatch: Dispatch<IContextAction>;
}

// use a type to allow us use descriminating unions(I counter action can be one of multiple values)
export type IContextAction =
    | { type: 'GET_MEMES'; payload: IMeme[] }
    | { type: 'GET_MEMES_FAILURE'; payload: any }
    | {type: 'GET_MY_CUSTOM_MEMES'; payload: ICustomMeme[]}
    | {type: 'GET_MY_CUSTOM_MEMES_FAILURE'; payload: any}
    | { type: 'ADD_CUSTOM_MEME'; payload: ICustomMeme }
    | {type: 'ADD_CUSTOM_MEME_FAILURE'; payload: any}
    | {type: 'UPDATE_CUSTOM_MEME'; payload: ICustomMeme }
    | {type: 'UPDATE_CUSTOM_MEME_FAILURE'; payload: ICustomMeme }
    | {type: 'DELETE_CUSTOM_MEME'; payload: string}
    | {type: 'API_CALL'}