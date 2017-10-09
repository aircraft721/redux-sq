import characters_json from '../data/characters.json';

export const characters = (state=characters_json, action) => {
    switch(action.type){
        default: 
            return state;
    }
}