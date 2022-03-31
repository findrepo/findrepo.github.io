import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

/**
 * Component to show the language or fetch languages from API.
 * If fetched it should come from the loader state cache.
 * @param {*} props 
 */
function LangCell(props) {
    const { language, langUrl, clickShouldLoad } = props;
    const langList = useSelector(state => state.loader[langUrl]);
    const proxyPrefix = useSelector(state => state.search.proxyPrefix) || '';
    const dispatch = useDispatch();
    const PROXY = 'https://thingproxy.freeboard.io/fetch/';

    // eslint-disable-next-line
    const [isFetchStarted, setFetchStarted] = useState(false);

    const toggleProxy = () => {
        dispatch({
            type: "SET_PROXY",
            payload: {
                proxyPrefix: (proxyPrefix === '' ? PROXY : '')
            }
        });
        alert('Network error, click again later!');
    }

    const onCellClick = () => {
        if (clickShouldLoad && !langList && !isFetchStarted) {
            axios.get(proxyPrefix+langUrl).then(response => {
                // console.log(proxyPrefix+langUrl +' <- langUrl result', response.data);
                if (response.status === 200) {
                    dispatch({
                        type: "URL_FETCHED",
                        payload: {
                            data: response.data,
                            url: langUrl
                        }
                    });
                    setFetchStarted(true);
                } else {
                    // console.log('Error lang fetch!');
                    toggleProxy();
                    // setTimeout(() =>{setFetchStarted(false);}, 1500+(Math.random() * (response.status) +1));
                }
            }).catch(function (errorObj) {
                // console.log('Error in lang fetch', errorObj);
                toggleProxy();
                // setTimeout(() =>{setFetchStarted(false);}, 1000+(Math.random() * (500) +1));
            });
        }

    }

    /*
    useEffect(() => {
        if (!langList && !isFetchStarted) {
            setFetchStarted(true);
            // console.log('Start fetching: ' + langUrl);
            axios.get(langUrl).then(response => {
                // console.log('langUrl result', response);
                if (response.status === 200) {
                    dispatch({
                        type: "URL_FETCHED",
                        payload: {
                            data: response.data,
                            url: langUrl
                        }
                    })
                } else {
                    // console.log('Error lang fetch!');
                    // setTimeout(() =>{setFetchStarted(false);}, 1500+(Math.random() * (response.status) +1));
                }
            }).catch(function (errorObj) {
                // console.log('Error in lang fetch', errorObj);
                // setTimeout(() =>{setFetchStarted(false);}, 1000+(Math.random() * (500) +1));
            });
        }
    }, [ dispatch, isFetchStarted, langList, langUrl])
    */

    return <div title={clickShouldLoad ? 'click to load language details' : 'language'}
            className="langCellsHolder" onClick={onCellClick}>
        {!langList ? 
            (language ?
                    (<Button variant="secondary" size="sm" disabled={isFetchStarted || !clickShouldLoad}>{language}</Button>) : '' )
                     : '' }
        {(langList || []).map((lang, idx) => (
            <Button variant="secondary" key={idx} size="sm" disabled={true}>{lang}</Button>
        ))}
    </div>

}

export default LangCell;