import axios from 'axios'
export const GET_SHOPS = "GET_SHOPS";
export const getShops = payload => ({
    type: GET_SHOPS,
    payload
});
export const getListShops = payload => {
    return dispatch => {
        axios.get(`${process.env.REACT_APP_URL_API}`)
        .then((data) => {
            const {stores} = data.data.response;
            dispatch(getShops(stores))
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
        });
    }
}
