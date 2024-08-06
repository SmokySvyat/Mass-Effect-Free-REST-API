import './Main.css';
import TryApp from '../TryApp/TryApp';

function Main ({language}) {
    function Description({description}) {
        const {
            title,
            paragraphs,
            subtitle,
            paragraphsSt
        } = description;
        
        return (
            <>
            <h2>{title}</h2>
            {paragraphs.map((el, i) => {
                return (
                    <p key={i++}>{el}</p>
                )
            })}
            <h3>{subtitle}</h3>
            {paragraphsSt.map((el, i) => {
                return (
                    <p key={i++}>{el}</p>
                )
            })}
            </>
        )
    }

    function Specification({specification}) {
        console.log(specification)

        const content = () => {
            return (
            specification.map((article, i) => {
                const {
                    heading,
                    endpoint,
                    paragraphs,
                    code,
                    errors
                } = article;
                console.log(code)
                return (
                    <li className='spec-list__item' key={i++}>
                        <h4 className='spec-list__item-title'>{heading}{endpoint ? <span className='span-url'>{` | ${endpoint}`}</span> : ''}</h4>
                        {paragraphs.map((el, i) => {
                            return (
                                <p key={i++} className='spec-list__item-description'>{el}</p>
                            )
                        })}
                        {code ? <pre key={i++} className='code' dangerouslySetInnerHTML={code} /> : ''}
                        {errors ? <p className='spec-list__item-description'>{errors.text} <a href={errors.link} className='span-error'>{errors.title}</a></p> : ''}
                    </li>
                )
            }))
        }

        return (
            <>
                <article>
                    <h3>Запросы и эндпоинты</h3>
                    <ul className='spec-list'>
                        {content()}
                    </ul>
                </article>
            </>
        )
    }
    return (
        <main className="main">
            <section  id="about" className='section'>
                <Description 
                    description = {language.description}
                />
                <TryApp
                    language = {language}
                />
            </section>
        <section id="spec" className="section">
            <h2>Спецификация</h2>
          <ul className='spec-list'>
            <Specification specification={language.specification} />

            <li className='spec-list__item'>
                <h4 className='spec-list__item-title'>PATCH | <span className='span-url'>contacts/:id</span></h4>
                <p className='spec-list__item-description'>
                    Изменяет существующие данные в документе с запрашиваемым Id, кроме пароля. Возвращает объект с изменённым(и) значением(ями).
                    Пример отправки запроса по эндпоинту <span className='span-url'>/api/contacts/657d866188a46a437e241e6e</span>. 
                    <br />Тело запроса должно быть в формате JSON следующей структуры:
                </p>
                <pre className='code' dangerouslySetInnerHTML={
                    {__html: `
{
    "email": "email@example.com",
    "phone": "03334447788"
}
                    `}
                } />
                <p className='spec-list__item-description'>
                    или может содержать только одно из значений, email или phone.
                </p>
                <p className='spec-list__item-description'>
                    Валидация значений, объекты с сообщениями об ошибках такие же, как при создании документа.
                </p>
                <p className='spec-list__item-description'>
                    При успешном обновлении документа, так же, создаётся, если документ ещё не обновлялся, или обновляется ключ <span className='code'>updatedAt:</span> со 
                    значением даты обновления в формате <span className='code'>2023-12-18T07:19:25.511+00:00</span>.
                </p>
                <p className='spec-list__item-description'>
                    При попытке отправки значений уже имеющихся в документе, вернется объект с сообщением, что документ с таким значением уже существует. Например: в базе 
                    существует пользователь с номером 03334447788, первым запросом мы изменяем его номер на 04445556677, и при попытке отправки второго и последующих запросов 
                    с номером 04445556677 будет возвращаться сообщение: "message": "Пользователь с таким phone уже зарегистрирован".
                </p>
                <p className='spec-list__item-description'>
                    Запрос документа по несуществующему Id возвращает объект с сообщением.
                    <br />Ошибка "<a href='#not-found' className='span-error'>Not Found</a>".
                </p>
            </li>

            <li className='spec-list__item'>
                <h4 className='spec-list__item-title'>DELETE | <span className='span-url'>contacts/:id/delete</span></h4>
                <p className='spec-list__item-description'>
                    Удаляет документ с запрашиваемым Id. Возвращает объект с сообщением об успешном удалении.
                </p>
                <p className='spec-list__item-description'>
                    Пример запроса: <span className='span-url'>/api/contacts/657d866188a46a437e241e6e/delete</span>
                </p>
                <pre className='code' dangerouslySetInnerHTML={
                    {__html: `
{
    "message": "Контакт удалён."
}
                    `}
                } />
                <p className='spec-list__item-description'>
                    Запрос удаления документа по несуществующеу Id вернёт объект с сообщением.
                    <br />Ошибка "<a href='#not-found' className='span-error'>Not Found</a>".
                </p>
            </li>
          </ul>
        </section>
      </main>
    )
}

export default Main;