import './Main.css';

function Main () {
    return (
        <main className="main">
        <article  id="about" className='article'>
          <h2>Описание</h2>
          <p>
            Mass Effect API это програмно доступная база данных трилогии Mass Effect с информацией
            о ключевых персонажах, расах, планетах, для тех кто не знаком с франшизой, даже с информацией
            о каждой игре трилогии.
          </p>
          <p>
            Подойдёт как для обучения работы в программах Postman и ему подобных,
            так и для тестирования свего frontend интерфейса.
          </p>
          {/* <h3>Попробуй</h3>
          <div>
            <ul className='link-list'>
              <li className='link-list__item'></li>
            </ul>
          <div className='output'></div>
          </div> */}
          
        </article>
        <article id="spec" className="article">
          <h2>Спецификация</h2>
          <ul className='spec-list'>
            <h3 className='spec-list__title'>Запросы и эндпоины</h3>
            <p className='spec-list__description'>
                Базовым URL является <span className='span-url'>meapi.ru/api/</span> или <span className='span-url'>meapi.online/api/</span> реализованные
                 типы запросов и эндпоины прописаны ниже.</p>
            <li className='spec-list__item'>
                <h4 className='spec-list__item-title'>GET | <span  className='span-url'>collection-name/page/0-0</span></h4>
                <p className='spec-list__item-description'>
                    Возвращает массив всех объектов из коллекции.
                    <br />Доступные коллекции: <span className='span-collection'>planets</span>, <span className='span-collection'>races</span>, <span className='span-collection'>characters</span>. 
                    <br />Пример объекта из массива коллекции <span className='span-collection'>planets</span> по 
                    эндпоинту <span  className='span-url'>/planets/page/0-0</span>:
                </p>
                <pre className='code' dangerouslySetInnerHTML={
                    {__html: `
{
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
}
`}} 
                />
            </li>

            <li className='spec-list__item'>
                <h4 className='spec-list__item-title'>GET | <span  className='span-url'>collection-name/object/object-id</span></h4>
                <p className='spec-list__item-description'>
                    Возвращает объект с запрашиваемым ID Например <span className='span-url'>/api/planets/object/6548db28c383a41ab1b432ab</span> вернёт 
                    объект из примера выше
                </p>
            </li>

            <li className='spec-list__item'>
                <h4 className='spec-list__item-title'>GET | <span className='span-url'>collection-name/page/:page-:range</span></h4>
                <p className='spec-list__item-description'>
                    Возвращет массив объектов постранично. С указанием: общего количества документов в массиве, количеством документов на странице, 
                    номер текущей страницы, общим количеством страниц. Например <span className='span-url'>/api/planets/page/1-10</span> вернет первую 
                    страницу коллекции <span className='span-collection'>planets</span> с 10 объектами, <span className='span-url'>.../2-10</span> вторую 
                    страницу, <span className='span-url'>.../3-10</span> третью и etc.
                </p>
                <pre className='code' dangerouslySetInnerHTML={
                    {__html: `
{
    "total": 73,
    "total_pages": 8,
    "per_page": 10,
    "page_now": 1,
    "data": [
        {
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
        },
]}
                    `}
                } />
                <p className='spec-list__item-description'>
                    Запрос несуществующей страницы вернет ошибку "<a href='#error-not-found' className='span-error'>ERROR_NOT_FOUND</a>".
                </p>
            </li>

            <li className='spec-list__item'>
                <h4 className='spec-list__item-title'>GET | <span className='span-url'>contacts/all</span></h4>
                <p className='spec-list__item-description'>
                    Возвращает массив объектов "безопасных" контактов (без значения пароля). 
                    Пароль хэшируется и хранится в коллекции в зашифрованном виде, без возможности его просмотреть.
                </p>
            </li>

            <li className='spec-list__item'>
                <h4 className='spec-list__item-title'>GET | <span className='span-url'>contacts/:id</span></h4>
                <p className='spec-list__item-description'>
                    Возвращает объект "безопасного" контакта по запрашиваемому Id.
                    Пример ответа на запрос по эндпоинту <span className='span-url'>/api/contacts/657d866188a46a437e241e6e</span>:
                </p>
                <pre className='code' dangerouslySetInnerHTML={
                    {__html: `
{
    "id": "657d866188a46a437e241e6e",
    "email": "shepard@meapi.gl",
    "phone": "03334447788"
}
                    `}
                } />
                <p className='spec-list__item-description'>
                    Запрос контакта по несуществующему Id возвращает объект с сообщением.
                    <br />Ошибка "<a href='#not-found' className='span-error'>Not Found</a>".
                </p>
            </li>

            <li className='spec-list__item'>
                <h4 className='spec-list__item-title'>POST | <span className='span-url'>contacts/new</span></h4>
                <p className='spec-list__item-description'>
                    Создаёт документ в базе данных. В качестве ответа возвращает объект с email созданного контакта.
                    Тело запроса должно быть в формате JSON следующей структуры:
                </p>
                <pre className='code' dangerouslySetInnerHTML={
                    {__html: `
{
    "email": "email@example.com",
    "password": "Password2!",
    "phone": "03334447788"
}
                    `}
                } />
                <p className='spec-list__item-description'>
                    Значение email валидируется на уникальность и на соотвествие шаблону email. Значение phone валидируется на уникальность, 
                    минимальную дину в 10 цифр и на присутсвие в строке только чисел. Пароль валидируется на минимальную длину в 8 символов, 
                    шифруется и хранится в таком состоянии в коллекции. При успешном создании документа к нему автоматически добавляется 
                    ключ <span className='code'>createdAt:</span> со значением даты создания документа в формате <span className='code'>2023-12-18T07:19:25.511+00:00</span>.
                </p>
                <p className='spec-list__item-description'>
                    Если какое-либо из значений не уникально, документ не создаётся и возвращается объект с сообщением об ошибке и указанием, что именно не уникально.
                </p>
                <p className='spec-list__item-description'>
                    При передаче некорректных данных, когда значение email не соответсвует шаблону и/или в значении phone 
                    содержится что-то кроме цифр, документ не создаётся, возвращается объект с сообщением об ошибке соответсвующего характера.
                </p>
                <p className='spec-list__item-description'>
                    Ошибка "<span className='span-error'>Not Unique</span>".
                </p>
            </li>

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

            <li className='spec-list__item'>
                <h4 className='spec-list__item-title'> | <span className='span-url'></span></h4>
                <p className='spec-list__item-description'>
                </p>
                <pre className='code' dangerouslySetInnerHTML={
                    {__html: `
{
}
                    `}
                } />
            </li>
          </ul>
        </article>
      </main>
    )
}

export default Main;