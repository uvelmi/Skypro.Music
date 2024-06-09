export async function getTracks() {
    const response = await fetch(
        'https://skypro-music-api.skyeng.tech/catalog/track/all/'
    )
    if (!response.ok) {
        throw new Error('Ошибка сервера')
    }
    const data = await response.json()
    return data
}

export async function userRegister({ email, password }) {
    return fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
            username: email,
        }),
        headers: {
            'content-type': 'application/json',
        },
		})
}

export async function userLogin({ email, password }) {
    return fetch('https://skypro-music-api.skyeng.tech/user/login/', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            'content-type': 'application/json',
        },
    })
}

