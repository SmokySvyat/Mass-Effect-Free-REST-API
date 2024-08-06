const PAGE_EN = {
    value: 'en',
    menu: 'Menu',
    main_link: 'Main',
    descr_link: 'Description',
    spec_link: 'Documentation',
    cont_link: 'Contacts',
    lang: 'Язык',
    overlay_value: 'ru',
    overlay_lang: 'Русский',
    ru: 'Русский',
    en: 'English',
    telegram: 'Have a questions? Visit chanel in Telegram',
    github: 'Project on GitHub',
    copyrights: 'by Svyatoslav Nesterov',
    titles: {
        description: 'Description',
        specification: 'Specification',
        requests_endpoints: "Request's and Endpoints",
        try_it: 'Try it!',
        errors: 'Errors',
        schemes: 'Schemes'
    },
    description: {
        paragraphs: [
        'Mass Effect REST API is a programmatically accessible database on the subject of the Mass Effect trilogy, with information about key characters, races, planets, for those who are not familiar with the franchise, even with information about each game of the trilogy.',
        'This API is suitable for those who started their journey in developing web interfaces. Following the documentation, you can send requests to the server and receive information corresponding to the request, thereby filling your site with data.',
                    'It may also be suitable for novice testers to create their own collection of API access tests.',
        'There is a limit on the number of API requests, it is 50 requests from one IP address in 15 minutes.',
        ],
        paragraphsTry: [
            'In the appendix below you can see a list of current requests. By clicking on the button, the address bar will display the address where the request went, and in the window below you can see the body of the response from the server and the body of the request, if any. Also, under the address bar, there is a response status code from the server.',
            'In order not to confuse boiling minds, code 418 was added as a joke and is displayed by default only when no request has been made yet or when clicking on the contact search button by id, changing or deleting it before the contact was created by the user.',
        ]
    },
    endpoints: [
        {
            heading: "Limiting request's",
            paragraphs: [
                'At the moment there is a limit on the number of API access requests. A maximum of 50 requests can be sent from one IP address every 15 minutes.'
            ],
            errors: {
                title: 'Too Many Requests',
                text: 'If this limit is exceeded, the server will respond with an error - ',
                link: '#error-too-many'
            }
        },
        {
            heading: 'Base URL',
            paragraphs: [
                'The base URL is meapi.ru/api / or meapi.online/api/. Further, the base URL is not specified in the name of the endpoints, it is displayed only in the sample queries.'
            ]
        },
        {
            heading: 'GET',
            endpoint: 'collection-name/page/0-0',
            paragraphs: [
                'Sending a GET request to this endpoint returns an array of all objects from the requested collection.',
                "Example of an object from the server's response to a GET request for the Planets collection endpoint:"
            ],
            code: {
                __html: `{
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
    "descriptionEN": "Amaterasu is a human colony, home to Ashley Williams' mother and sisters. It lies about a dozen light-years from the Czarnobóg Fleet Depot and is one of the smaller Alliance colonies. In 2181, Ashley took a week of extraordinary leave to return home to take care of her youngest sister, Sarah. Amaterasu is a terminus on the Illium-Amaterasu shipping lane. In 2185, as security advisors are being issued against travel to human colonies, none are issued for Amaterasu, possibly due to its proximity to an Alliance base.",
    "nameRU": "Amaterasu",
    "descriptionRU": "Amaterasu is a colony of people, the home of Ashley Williams, her mother and sister. This colony lies a dozen light-years from the Fast-Moving Warehouse of Kzarnobog, and is one of the small colonies of the Alliance. In 2181, Ashley took an extraordinary week off to return home and take care of her younger sister, Sarah. Amaterasu is the final stop on the Illium—Amaterasu route (you can find out by looking at the departure schedule of interplanetary shuttles at the Nos-Astra taxi stand). You can also see canceled flights and security alerts that warn aliens against visiting human colonies. However, no alert has been issued for Amaterasu, possibly due to the proximity of this colony to the border with Citadel space. A shuttle is regularly dispatched to the planet from the Nos Astra spaceport, Illium."
}`
            }
        },
        {
            heading: 'GET',
            endpoint: 'collection-name/object/object-id',
            paragraphs: [
                'Returns an object with the requested ID. For example, an endpoint request meapi.ru/api/planets/object/6548db28c383a41ab1b432ab returns the object from the example above',
            ],
        },
        {
            heading: 'GET',
            endpoint: 'collection-name/page/:page-:range',
            paragraphs: [
                'Returns an array of objects page by page. Indicating: the total number of documents in the array, the number of documents per page, the number of the current page, the total number of pages.',
                'For example, GET a request at meapi.ru/api/planets/page/1-10 returns the first page of the Planets collection with 10 objects, .../2-10 - the second, 3-10 - the third, and so on. By changing the parameter :range, the number of displayed objects on the page will change accordingly.'
            ],
            code: {
                __html: `{
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
            "descriptionEN": "Amaterasu is a human colony, home to Ashley Williams' mother and sisters. It lies about a dozen light-years from the Czarnobóg Fleet Depot and is one of the smaller Alliance colonies. In 2181, Ashley took a week of extraordinary leave to return home to take care of her youngest sister, Sarah. Amaterasu is a terminus on the Illium-Amaterasu shipping lane. In 2185, as security advisors are being issued against travel to human colonies, none are issued for Amaterasu, possibly due to its proximity to an Alliance base.",
            "nameRU": "Amaterasu",
            "descriptionRU": "Amaterasu is a colony of people, the home of Ashley Williams, her mother and sister. This colony lies a dozen light-years from the Fast-Moving Warehouse of Kzarnobog, and is one of the small colonies of the Alliance. In 2181, Ashley took an extraordinary week off to return home and take care of her younger sister, Sarah. Amaterasu is the final stop on the Illium—Amaterasu route (you can find out by looking at the departure schedule of interplanetary shuttles at the Nos-Astra taxi stand). You can also see canceled flights and security alerts that warn aliens against visiting human colonies. However, no alert has been issued for Amaterasu, possibly due to the proximity of this colony to the border with Citadel space. A shuttle from the Nos Astra spaceport, Illium, regularly departs to the planet."
            },
}`
            },
            errors: {
                title: 'Not Found',
                text: 'Requesting a non-existent page will return an error - ',
                link: '#error-not-found'
            }
        },
        {
            heading: 'GET',
            endpoint: 'contacts/all',
            paragraphs: [
                'Returns an array of "secure" contact objects (without a password value).',
                'The password is hashed and stored in the collection in encrypted form, without the ability to view it.',
            ],
        },
        {
            heading: 'GET',
            endpoint: 'contacts/:id',
            paragraphs: [
                'Returns the object of a "secure" contact by the requested Id.',
                'Example of a response to an endpoint request meapi.ru/api/contacts/657d866188a46a437e241e6e :',
            ],
            code: {
                __html: `{
    "id": "657d866188a46a437e241e6e",
    "email": "shepard@meapi.gl",
    "phone": "03334447788"
}`
            },
            errors: {
                title: 'Not Found',
                text: 'Requesting a contact with a non-existent Id returns an object with a message - ',
                link: '#error-not-found',
            }
        },
        {
            heading: 'POST',
            endpoint: 'contacts/new',
            paragraphs: [
                'Creates a document in the database. As a response, it returns an object with the email and Id of the created contact. The request body must be in JSON format',
                'The email value is validated for uniqueness and compliance with the email template. The phone value is validated for uniqueness, a minimum value of 10 digits, and the presence of only numbers in the string. The password is validated to a minimum length of 8 characters, encrypted and stored in this state in the collection. Upon successful creation of the document, the createdAt key is automatically added to it: with the value of the document creation date in the format 2023-12-18T07:19:25.511+00:00',
                'If any of the values are not unique, the document is not created and an object is returned with an error message and an indication of what exactly is not unique.',
                'When transmitting incorrect data, when the email value does not match the template and/or the phone value contains something other than numbers, the document is not created, an object with an error message of the appropriate nature is returned.',
            ],
            code: {
                __html: `{
    "email": "email@example.com",
    "password": "Password2!",
    "phone": "03334447788"
}`
            },
            errors: {
                title: 'Not Unique',
                text: 'Error - ',
                link: '#not-unique'
            }
        },
        {
            heading: 'PATCH',
            endpoint: 'contacts/:id',
            paragraphs: [
                'Modifies the existing data in the document with the requested Id, except for the password. Returns an object with the changed value(s).',
                'The request body must be in JSON format.',
                'Can contain only one of the values, email or phone.',
                'Validation of values, objects with error messages are the same as when creating the document.',
                'When the document is successfully updated, the value of the updatedAt key is updated',
                'When you try to send values that are already in the document, an object will return with a message that a document with such a value already exists. For example: there is a user with the number 03334447788 in the database, with the first request we change his number to 04445556677, and when trying to send the second and subsequent requests with the number 04445556677, the message will be returned: "message": "The user with this phone has already been registered."',
            ],
            code: {
                __html: `{
    "email": "email@example.com",
    "phone": "03334447788",
}`
            },
            errors: {
                title: 'Not Found',
                text: 'A document request for a non-existent Id returns an object with the message - ',
                link: '#error-not-found'
            }
        },
        {
            heading: 'DELETE',
            endpoint: 'contacts/:id/delete',
            paragraphs: [
                'Deletes the document with the requested Id. Returns an object with a message about successful deletion.',
            ],
            code: {
                __html: `{
    "message": "Contact deleted."
}`
            },
            errors: {
                title: 'Not Found',
                text: 'A request to delete a document by a non-existent Id will return an object with the message - ',
                link: '#error-not-found'
            }
        }
    ]
};

module.exports = {
    PAGE_EN
}