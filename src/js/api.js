import axios from "axios"
import { API_URL } from "./settings"

axios.defaults.baseURL = API_URL

const getCategoryList = async () => {
	const { data } = await axios("category-list")
	return data
}

const getTopBooks = async () => {
	const { data } = await axios("top-books")
	return data
}

const getBooksByCategory = async (category: string) => {
	const { data } = await axios("category", {
		params: {
			category,
		},
	})
	return data
}

const getBookByID = async id => {
	const { data } = await axios(id)
	return data
}

export { getCategoryList, getTopBooks, getBooksByCategory, getBookByID }
