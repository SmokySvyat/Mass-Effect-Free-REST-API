<h1 align="center">Mass Effect REST API</h1>
Тематическое REST API для AJAX запросов.<br>
Подойдёт как для обучения работы в программах Postman и ему подобных, так и для тестирования свего frontend интерфейса.

---


## Что работает сейчас?

Спецификация постоянно дополняется и обновляется.


### Запросы и эндпоины

Базовым URL является ```meapi.ru/api/``` или ```meapi.online/api/``` реализованный тип запроса и эндпоины прописаны ниже.

| GET | ```collection-name/page/0-0```| Возвращает массив аналогичных объектов |
|--:|:--:|:--|

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

| GET | ```collection-name/object/object-id``` | Возвращает объект с запрашиваемым ID <br><br> Например ```/api/planets/object/6548db28c383a41ab1b432ab``` вернёт объект из примера <br> выше |
|--:|:--:|:--|

| GET | ```collection-name/page/:page-:range``` | Возвращет массив объектов постранично. <br> С указанием: <br>  - общего количества документов в массиве <br>  - количеством документов на странице <br>  - указание номера текущей страницы <br>  - общим количеством страниц <br><br> Например ```/api/planets/page/1-10``` вернет первую страницу коллекции с 10 <br> объектами, ```2-10``` вторую страницу, ```3-10``` третью и etc. <br> Запрос несуществующей страницы вернет обьект с сообщением <br> ```message: 404```|
|--:|:--:|:--|

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
        ]
```
{
    "message": 404
}
```

### Доступные коллекции

- ```planets``` планеты
- ```races``` расы
- ```characters``` персонажи

---

## Что дальше?
В планах дальнейшей разработки:
 -  реализация типов запросов POST, PATCH, PUT, DELETE
 -  создание новых коллекций и эндпоинтов, наполнение БД информацией, усовершенствование схемы документов
 -  разработка frontend интерфейса с инструкцией и примером использования API

Проект делается для поддержания имеющихся знаний в тонусе и более детального понимания, изучения технологий в нём используемых.

## Источники
Идея создания тематического API возникла после использования в процессе обучения таких ресурсов как https://reqres.in/ и https://swapi.dev/

## Технологии
![Static Badge](https://img.shields.io/badge/express-%20?logo=express&labelColor=%23000000)
![Static Badge](https://img.shields.io/badge/node.js-%20?logo=node.js&logoColor=white&labelColor=%23339933)
![Static Badge](https://img.shields.io/badge/mongodb-%20?logo=mongodb&logoColor=white&labelColor=%2347A248)

