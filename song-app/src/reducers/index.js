import { combineReducers} from 'redux';
// static reducer
const songReducer = () => {
    return [
        {title: 'No Subs', duration: '4:05'},
        {title: 'Macarena', duration: '4:40'},
        {title: 'house', duration: '6:50'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
})