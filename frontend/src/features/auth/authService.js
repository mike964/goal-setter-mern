import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async userData => {
	const response = await axios.post(API_URL, userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}

	return response.data
}

// Login user
const login = async userData => {
	// const response = await axios.post(API_URL + 'login', userData)
	const response = await fetch(
		`http://localhost:5000/users?email=${userData.email}`
	)
	const data = await response.json()
	console.log(data)
	// output : [{id: '121', name: 'Mike Sin', email: 'mike@mail.com', password: '123123'}]

	// if (response.data)
	if (data[0])
		localStorage.setItem(
			'user',
			// JSON.stringify(response.data)
			JSON.stringify(data[0])
		)

	// return response.data
	return data[0]
}

// Logout user
const logout = () => {
	localStorage.removeItem('user')
}

const authService = {
	register,
	logout,
	login,
}

export default authService
