import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { House } from "@/models/House.js"

class HousesService {
    createHouse(value) {
    }

    async getHouses() {
        const response = await api.get('api/houses')
        logger.log('getting houses', response.data)
        const houses = response.data.map(pojo => new House(pojo))
        logger.log(houses)
        AppState.houses = houses
    }
}

export const housesService = new HousesService()