import characters_json from '../data/characters.json';

const createCharacter = (id) => {
    let character = characters_json.find(c=>c.id === id);
    return character;
}

export default createCharacter;