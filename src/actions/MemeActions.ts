import {IContextAction, ICustomMeme, IMeme} from '../interface';

export const getMemes = (memes: IMeme[]): IContextAction => ({
    type: "GET_MEMES",
    payload: memes
});

export const getMemesFailure = (error: any): IContextAction => ({
    type: "GET_MEMES_FAILURE",
    payload: error
})

export const getMyCustomMemes = (customMemes: ICustomMeme[]): IContextAction => ({
    type: "GET_MY_CUSTOM_MEMES",
    payload: customMemes
});

export const getMyCustomMemesFailure = (error: any): IContextAction => ({
    type: "GET_MY_CUSTOM_MEMES_FAILURE",
    payload: error
});

export const addCustomMeme = (customMeme: ICustomMeme): IContextAction => ({
    type: "ADD_CUSTOM_MEME",
    payload: customMeme
});

export const addCustomMemeFailure = (error: any): IContextAction => ({
    type: 'ADD_CUSTOM_MEME_FAILURE',
    payload: error
})

export const updateCustomMeme = (customMeme: ICustomMeme): IContextAction => ({
    type: "UPDATE_CUSTOM_MEME",
    payload: customMeme

});

export const updateCustomMemeFailure = (error: any): IContextAction => ({
    type: "UPDATE_CUSTOM_MEME_FAILURE",
    payload: error

});

export const deleteCustomMeme = (id: string): IContextAction => ({
    type: "DELETE_CUSTOM_MEME",
    payload: id
});

export const apiRequest = (): IContextAction => ({
    type: "API_CALL"
})


