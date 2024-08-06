const TryAppData = [
    {
        method: 'GET',
        nameRu: 'Все планеты',
        nameEn: 'All planets',
        value: 'planets/page/0-0',
    },
    {
        method: 'GET',
        nameRu: 'Все рассы',
        nameEn: 'All races',
        value: 'races/page/0-0',
    },
    {
        method: 'GET',
        nameRu: 'Все персонажи',
        nameEn: 'All characters',
        value: 'characters/page/0-0',
    },
    {
        method: 'GET',
        nameRu: 'По Id планеты',
        nameEn: 'by planet Id',
        value: 'planets/object/6548db28c383a41ab1b432ab',
    },
    {
        method: 'GET',
        nameRu: 'Все планеты (страницы)',
        nameEn: 'All planets (pages)',
        value: 'planets/page/1-10',
    },
    {
        method: 'GET',
        nameRu: 'Все контакты',
        nameEn: 'All contacts',
        value: 'contacts/all',
    },
    {
        method: 'GET',
        nameRu: 'По Id контакта',
        nameEn: 'by contact Id',
        value: 'contacts/',
        byId: 'true',
    },
    {
        method: 'POST',
        nameRu: 'Новый контакт',
        nameEn: 'New contact',
        value: 'contacts/new',
        request: {
            "email": "email@example.com",
            "password": "Password2!",
            "phone": "03334447788"
        }
    },
    {
        method: 'PATCH',
        nameRu: 'Изменить контакт',
        nameEn: 'Update contact',
        value: 'contacts/',
        request: {
            "email": "email2@example.com",
            "phone": "03334446688"
        }
    },
    {
        method: 'DELETE',
        nameRu: 'Удалить контакт',
        nameEn: 'Delete contact',
        value: 'contacts/',
    },
]

export default TryAppData;