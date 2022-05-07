import axios from 'axios'

// const API_URL = '/api/goals/'
const API_URL = '/goals/'

// Create new goal
const createGoal = async (goalData, token) => {
	// * Only when using json-server as backend
	const goalObject = {
		...goalData,
		createdAt: Date.now(),
	}
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	// const response = await axios.post(API_URL, goalData, config)
	const response = await axios.post(API_URL, goalObject, config)

	return response.data
}

// Get user goals
const getGoals = async token => {
	console.log('getGoals()..')
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	// const response = await axios.get(API_URL, config)
	const response = await axios.get(API_URL)
	console.log(response.data)

	return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.delete(API_URL + goalId, config)
	// console.log(response.data)  output : Nothing

	// * When using json-server as backend :
	// include id in action.payload to filter in redux store
	return { id: goalId }
	// return response.data
}

const goalService = {
	createGoal,
	getGoals,
	deleteGoal,
}

export default goalService
