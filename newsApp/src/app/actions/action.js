import 'whatwg-fetch';

// actions type 

const CHANGE_SIDE_BAR       = 'CHANGE_SIDE_BAR';
const FETCH_CONTENTS_START   = 'FETCH_CONTENTS_START';
const FETCH_CONTENTS_SUCCESS = 'FETCH_CONTENTS_SUCCESS';
const REFRESH_SESSION       = 'REFRESH_SESSION'

// http get from fetch 
const send_by_get = ({url}, dispatch) => {
    let finalUrl = url + '&apiKey=f4a14c5d8a8e4f3d8b514fbcdc3da756';
    return fetch(finalUrl)
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    return res.json();
                }
                return Promise.reject(new Error(res.status));
            });
}


const fetch_contents = (source) => {
    const url = `https://newsapi.org/v1/articles?source=${source}&sortBy=top`;
    return (dispatch) => {
        dispatch({type: FETCH_CONTENTS_START});
        if (sessionStorage.getItem(source)) {
            console.log('get from sessionStorage');
            let articles = JSON.parse(sessionStorage.getItem(source));
            dispatch({type: FETCH_CONTENTS_SUCCESS, contents: Object.assign({articles : articles}, {currentChanel: source.toUpperCase()})})
        }
        else {
            send_by_get({url}, dispatch)
            .then((json) => {
                if (json.status === 'ok') {
                    sessionStorage.setItem(source, JSON.stringify(json.articles)); 
                    dispatch({type: FETCH_CONTENTS_SUCCESS, contents: Object.assign({articles : json.articles}, {currentChanel: source.toUpperCase()})})
                }
                else{
                    return Promise.reject(new Error('FETCH_CONTENTS_SUCCESS failure'));
                }
            })
            .catch((error) => {
                return Promise.reject(error)
            })
        }
    };
}


function change_side_bar(){
    return {
        type : CHANGE_SIDE_BAR,
    }
}

function refresh_session(){
    return {
        type : REFRESH_SESSION,
    }
}

export {CHANGE_SIDE_BAR, FETCH_CONTENTS_START, FETCH_CONTENTS_SUCCESS, REFRESH_SESSION, change_side_bar, refresh_session,fetch_contents};
