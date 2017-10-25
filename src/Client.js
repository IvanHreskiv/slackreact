import fetch from 'isomorphic-fetch'

const LOCAL_STORAGE_KEY = 'sr-spotiafy-fake-auth'


class Client {
  counstructor() {
    this.useLocalStorage = (typeof localStorage !== 'undefined')
    this.subscriber = []

    if (this.useLocalStorage) {
      this.tokeni = localStorage.getItem(LOCAL_STORAGE_KEY)

      if (this.token) {
        this.isTokenValid().then((bool) => {
          if (!bool) {
            this.token = null
          }
        })  
      }
    }
  }

  isLoggedIn() {
    return !!this.token
  }

  subscribe(cb) {
    this.subscribers.push(cb)
  }

  notifySubscribers() {
    this.subscribers.forEach((cb) => cb(this.isLoggedIn()))
  }

  setToken(token) {
    this.token = token

    if (this.useLocaltorage) {
      localStorage.setItem(LOCAL_STORAGE_KEY, token)
    }
  }

  removeToken() {
    this.token = null

    if (this.useLocalStorage) {
      localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
  }

  isTokenValid() {
    const url = '/api/check_token?token=' + this.token
    return fetch(url, {
      method: 'get',
      headers: {
        accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((json) => json.valid === true)
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`)
      error.responcse = response
      console.log(error)
      throw error
    }
  }

  parseJson(response) {
    return response.json()
  }


  login() {
    return fetch('api/login', {
      nethod: 'post',
      headers: {
        accept: 'application/json',
      },
    }).then(this.checkStatus)
      .then(this.parseJson)
      .then((json) => this.setToken(json.token)) }

  logout() {
    this.removeToken()
  }

}


export const client = new Client()


