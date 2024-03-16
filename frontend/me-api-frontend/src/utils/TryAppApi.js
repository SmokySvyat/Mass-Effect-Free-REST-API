export default class TryAppApi {
    constructor({url, data}) {
        this._url = url;
        this._data = data;
        this._value = data.value;
    }

    get() {
        return fetch(`${this._url}${this._value}${this._data?.byId ? localStorage.getItem('id') : ''}`)
    }

    post() {
        return fetch(`${this._url}${this._value}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this._data.request)
        })
    }

    patch() {
        return fetch(`${this._url}${this._value}${localStorage.getItem('id')}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this._data.request)
        })
    }

    delete() {
        return fetch(`${this._url}${this._value}${localStorage.getItem('id')}/delete`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
    }
}