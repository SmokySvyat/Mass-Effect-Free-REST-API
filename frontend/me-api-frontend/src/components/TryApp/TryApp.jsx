import { useState } from 'react';
import './TryApp.css';
import TryAppData from './TryAppData';
import { BASE_MEAPI_URL_RU, TEAPOT_STATUS } from '../../utils/constants';

function TryApp ({language}) {
    const [status, setStatus] = useState(TEAPOT_STATUS);
    const [url, setUrl] = useState('');
    const [res, setRes] = useState([]);
    const [req, setReq] = useState([]);
    const [isReqBtnActive, setIsReqBtnActive] = useState(false);
    const [isResBtnActive, setIsResBtnActive] = useState(true);
    const reqBtnClassName = isReqBtnActive ? 'reqres-btn reqres-btn_active' : 'reqres-btn';
    const resBtnClassName = isResBtnActive ? 'reqres-btn reqres-btn_active' : 'reqres-btn';
    const resCodeClassName = status === 200 || status === 201 ? 'response-code_code-green' : 'response-code_code-red';

    const teapot = () => {
        setStatus(TEAPOT_STATUS)
        setUrl('')
        setRes({
            "message": "создайте пользователя"
        })
    }

    const toggleSpanClassName = (method) => {
        switch (method) {
            case 'GET':
                return 'try-app__span_get';
            case 'POST':
                return 'try-app__span_post';
            case 'PATCH':
                return 'try-app__span_patch';
            case 'DELETE':
                return 'try-app__span_delete';
            default:
                break;
        }
    }

    const toggleReqMethod = (data) => {
        switch (data.method) {
            case 'GET':
                getMethod(data)
                break;
            case 'POST':
                postMethod(data)
                break;
            case 'DELETE':
                deleteMethod(data)
                break;
            case 'PATCH':
                patchMethod(data)
                break;
            default:
                break;
        }
    }

    const renderJson = (res, post) => {
        if (!res.ok) {
            res.json().then((err) => {
                setRes(err)
            })
        } else {res.json().then((res) => {
            setRes(res)
            if (post) localStorage.setItem('id', res.id)
        })}
    }

    const getMethod = (data) => {
        if (!localStorage.getItem('id') && data?.byId) {teapot(); return}
        fetch(`${BASE_MEAPI_URL_RU}${data.value}${data?.byId ? localStorage.getItem('id') : ''}`)
          .then((res) => {
            setStatus(res.status);
            renderJson(res);
          })
          .catch((err) => {
            console.log(err)
          })
    }

    const postMethod = (data) => {
        fetch(`${BASE_MEAPI_URL_RU}${data.value}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data.request)
        })
        .then((res) => {
            setStatus(res.status);
            renderJson(res, true);
        })
        .catch((err) => console.log(err))
    }

    const patchMethod = (data) => {
        if (localStorage.getItem('id')) {
            fetch(`${BASE_MEAPI_URL_RU}${data.value}${localStorage.getItem('id')}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data.request)
            })
            .then((res) => {
                setStatus(res.status);
                renderJson(res)
            })
            .catch((err) => console.log(err))
        } else {
            teapot();
        }
    }

    const deleteMethod = (data) => {
        if (localStorage.getItem('id')) {
            fetch(`${BASE_MEAPI_URL_RU}${data.value}${localStorage.getItem('id')}/delete`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then(res => {
                setStatus(res.status)
                renderJson(res)
            })
            .catch(err => console.log(err))
        } else {
            teapot();
        }
    }
    const renderBtns = (value) => {        
        return (
        TryAppData.map((data, i) => {

            const handleSetUrl = (data) => {
                switch (data.method) {
                    case 'DELETE':
                        setUrl(`${BASE_MEAPI_URL_RU}${data.value}${localStorage.getItem('id')+`/delete`}`)
                        break;
                    case 'PATCH':
                        setUrl(`${BASE_MEAPI_URL_RU}${data.value}${localStorage.getItem('id')}`)
                        break;
                    default:
                        if (data?.byId) {
                            setUrl(`${BASE_MEAPI_URL_RU}${data.value}${localStorage.getItem('id')}`)
                        } else {
                            setUrl(`${BASE_MEAPI_URL_RU}${data.value}`)
                        }
                        break;
                }
            }

            const handleBtnClick = () => {
                handleSetUrl(data)
                toggleReqMethod(data)
                if (data?.request) {
                    setReq(data.request)
                } else {
                    setReq({})
                }
            }
            return (
                <li className='try-app__list-item' key={i++}>
                    <button className='try-app__btn' type='button' onClick={handleBtnClick} value={data.value}>
                        <span className={`try-app__span ${toggleSpanClassName(data.method)}`}>{data.method}</span>{value === 'ru' ? data.nameRu : data.nameEn}
                    </button>
                </li>
            )
        })
    )}

    const handleTabClick = (e) => {
        switch (e.target.value) {
            case 'req':
                setIsReqBtnActive(true);
                setIsResBtnActive(false);
                break;
            case 'res':
                setIsReqBtnActive(false);
                setIsResBtnActive(true);
                break;
            default:
                break;
        }
    }

    return (
        <div className='try-app'>
            <ul className='try-app__list'>
                {renderBtns(language.value)}
            </ul>
            <div className='try-app__reqres'>
                <p className='reqres-url'>{url}</p>
                <div className='reqres-controls'>
                    <button className={reqBtnClassName} onClick={handleTabClick} value={'req'}>Request</button>
                    <button className={resBtnClassName} onClick={handleTabClick} value={'res'}>Response</button>
                    <p className='response-code'>Status code: <span className={resCodeClassName}>&#9679; {status}</span></p>
                </div>
                <pre className='response-body'>{isResBtnActive ? JSON.stringify(res, null, 1) : JSON.stringify(req, null, 1)}</pre>
            </div>
        </div>
    )
}

export default TryApp;