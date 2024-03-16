import { useState, useMemo } from 'react';
import './TryApp.css';
import TryAppData from './TryAppData';
import { BASE_MEAPI_URL_RU, TEAPOT_STATUS } from '../../utils/constants';
import TryAppApi from '../../utils/TryAppApi';

let renderCount = 0;

export default function TryApp ({language}) {
    console.log(`Render TryApp: ${++renderCount}`)
    const [status, setStatus] = useState(TEAPOT_STATUS);
    const [url, setUrl] = useState('');
    const [res, setRes] = useState([]);
    const [req, setReq] = useState([]);
    const [isReqBtnActive, setIsReqBtnActive] = useState(false);
    const [isResBtnActive, setIsResBtnActive] = useState(true);
    const reqTabClassName = isReqBtnActive ? 'reqres-btn reqres-btn_active' : 'reqres-btn';
    const resTabClassName = isResBtnActive ? 'reqres-btn reqres-btn_active' : 'reqres-btn';
    const resCodeClassName = status === 200 || status === 201 ? 'response-code_code-green' : 'response-code_code-red';

    function Btns ({lang}) {
        return (
            TryAppData.map((data, i) => {

                const api = new TryAppApi({
                    url: BASE_MEAPI_URL_RU,
                    data: data
                })

                const teapot = () => {
                    setStatus(TEAPOT_STATUS)
                    setUrl('')
                    setRes({
                        "message": "создайте пользователя"
                    })
                }

                const renderJson = (res, post) => {
                    setStatus(res.status)
                    if (!res.ok) {
                        res.json().then((err) => {
                            setRes(err)
                        })
                    } else {
                        res.json().then((res) => {
                        setRes(res)
                        if (post) localStorage.setItem('id', res.id)
                    })}
                }
        
                const getMethod = (data) => {
                    if (!localStorage.getItem('id') && data?.byId) {teapot(); return}
                    api
                      .get()
                      .then((res) => {
                        renderJson(res);
                      })
                     .catch((err) => {
                        console.log(err)
                     })
                }
        
                const postMethod = () => {
                    api
                      .post()
                      .then((res) => {
                        renderJson(res, true);
                      })
                      .catch((err) => console.log(err))
                }
        
                const patchMethod = () => {
                    if (localStorage.getItem('id')) {
                        api
                          .patch()
                          .then((res) => {
                            renderJson(res)
                          })
                          .catch((err) => console.log(err))
                    } else {
                        teapot();
                    }
                }
        
                const deleteMethod = () => {
                    if (localStorage.getItem('id')) {
                        api
                          .delete()
                          .then(res => {
                            renderJson(res)
                          })
                          .catch(err => console.log(err))
                    } else {
                        teapot();
                    }
                }

                const toggleReqMethod = (data) => {
                    switch (data.method) {
                        case 'GET':
                            getMethod(data)
                            break;
                        case 'POST':
                            postMethod()
                            break;
                        case 'DELETE':
                            deleteMethod()
                            break;
                        case 'PATCH':
                            patchMethod()
                            break;
                        default:
                            break;
                    }
                }

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
                        setReq([])
                    }
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

                return (
                    <li className='try-app__list-item' key={i++}>
                        <button className='try-app__btn' type='button' onClick={handleBtnClick} value={data.value}>
                            <span className={`try-app__span ${toggleSpanClassName(data.method)}`}>{data.method}</span>{lang === 'ru' ? data.nameRu : data.nameEn}
                        </button>
                    </li>
                )
            })
        )
    }

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
    
//убираем лишний рендер кнопок
    const btns = useMemo(() => {
        return <Btns lang = {language.value} />
    }, [language.value])

    const content = isResBtnActive ? JSON.stringify(res, null, 1) : JSON.stringify(req, null, 1)

    return (
        <div className='try-app'>
            <ul className='try-app__list'>
                {btns}
            </ul>
            <div className='try-app__reqres'>
                <p className='reqres-url'>{url}</p>
                <div className='reqres-controls'>
                    <button className={reqTabClassName} onClick={handleTabClick} value={'req'}>Request</button>
                    <button className={resTabClassName} onClick={handleTabClick} value={'res'}>Response</button>
                    <p className='response-code'>Status code: <span className={resCodeClassName}>&#9679; {status}</span></p>
                </div>
                <pre className='response-body'>{content}</pre>
            </div>
        </div>
    )
};