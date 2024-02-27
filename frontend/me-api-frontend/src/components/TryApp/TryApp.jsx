import { useState } from 'react';
import './TryApp.css';
import TryAppData from './TryAppData';

function TryApp ({language}) {
    const [isReqBtnActive, setIsReqBtnActive] = useState(false);
    const [isResBtnActive, setIsResBtnActive] = useState(true);
    const reqBtnClassName = isReqBtnActive ? 'reqres-btn reqres-btn_active' : 'reqres-btn';
    const resBtnClassName = isResBtnActive ? 'reqres-btn reqres-btn_active' : 'reqres-btn';

    const resCode = 200;

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
    const renderMethodBtns = (value) => {        
        return (
        TryAppData.map((data, i) => {
            return (
                <li className='try-app__list-item' key={i++}>
                    <button className='try-app__btn' value={data.value}>
                        <span className={`try-app__span ${toggleSpanClassName(data.method)}`}>{data.method}</span>{value === 'ru' ? data.nameRu : data.nameEn}
                    </button>
                </li>
            )
        })
    )}

    const handleBtnClick = (e) => {
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

    const reqContent = `{

}`;
    const resContent = `{
    "_id": "6548db28c383a41ab1b432ab",
    "image": "",
    "systemName": "",
    "links": "",
    "episode": "Mass Effect 2",
    "type": {
        "planet": "true",
        "satelite": "false",
        "colony": "true",
        "station": "false"
    },
    "codex": "",
    "nameEN": "Amaterasu",
    "descriptionEN": "Amaterasu is a human colony, home to Ashley Williams' mother and sisters. It lies about a dozen light-years from the Czarnobóg Fleet Depot and is one of the smaller Alliance colonies. In 2181, Ashley took a week of extraordinary leave to return home to take care of her youngest sister, Sarah. Amaterasu is a terminus on the Illium-Amaterasu shipping lane. In 2185, as security advisories are being issued against travel to human colonies, none are issued for Amaterasu, possibly due to its proximity to an Alliance base.",
    "nameRU": "Аматерасу",
    "descriptionRU": "Аматерасу (англ. Amaterasu — колония людей, дом Эшли Уильямс, её матери и сестры. Эта колония лежит в дюжине световых лет от Быстроходного Склада Кзарнобог, и является одной из малых колоний Альянса. В 2181 году, Эшли взяла неделю экстраординарного отпуска, чтобы вернуться домой, и позаботиться о своей младшей сестре, Саре. Аматерасу — конечная остановка на маршруте Иллиум-Аматерасу (узнать можно, посмотрев расписание отправлений межпланетных шаттлов на стоянке такси Нос-Астра). Также там можно увидеть отменённые рейсы и оповещения безопасности, которые предостерегают инопланетян от посещения человеческих колоний. Однако, ни одно оповещение не было выпущено для Аматерасу, возможно из-за близости этой колонии к границе с пространством Цитадели. На планету регулярно отправляется шаттл из космопорта Нос-Астра, Иллиум."
}`;
    return (
        <div className='try-app'>
            <ul className='try-app__list'>
                {renderMethodBtns(language.value)}
            </ul>
            <div className='try-app__reqres'>
                <p className='reqres-url'></p>
                <div className='reqres-controls'>
                    <button className={reqBtnClassName} onClick={handleBtnClick} value={'req'}>Request</button>
                    <button className={resBtnClassName} onClick={handleBtnClick} value={'res'}>Response</button>
                    <p className='response-code'>Status code: <span className='response-code_code'>&#9679; {resCode}</span></p>
                </div>
                <pre className='response-body'>{isResBtnActive ? resContent : reqContent}</pre>
            </div>
        </div>
    )
}

export default TryApp;