import _ from 'lodash';
import blogApiGw from '../api/blog-api-gw';

export const fetchApiDataAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchApiDataActionCreator());
    
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUserDataActionCreator(id)))
        .value();
}
export const fetchApiDataActionCreator = () => 
    async (dispatch) => {
        const response = await blogApiGw.get('/posts');
        dispatch({type: 'FETCH_API_DATA', payload: response.data});
    };

export const fetchUserDataActionCreator = (id) => 
    async (dispatch) => {
        const response = await blogApiGw.get(`/users/${id}`);
        dispatch({type: 'FETCH_USER_DATA', payload: response.data});
    }
/*     export const fetchUserDataActionCreator = (id) => dispatch =>
        _fetchuser(id, dispatch);

    const _fetchuser = _.memoize(
        async (id, dispatch) => {
            const response = await blogApiGw.get(`/users/${id}`);
            dispatch({type: 'FETCH_USER_DATA', payload: response.data});
    }); */