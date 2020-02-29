import axios from 'axios'

const BACKEND_API_URL = 'http://localhost:8080/api/v1'
const PET_PROJECT_API_URL = `${BACKEND_API_URL}/pet-projects/`

class PetProjectDataService {

    retrieveAllPetProjects() {
        return axios.get(`${PET_PROJECT_API_URL}`);
    }

    retrievePetProjectByName(name) {
        return axios.get(`${PET_PROJECT_API_URL}/${name}`); 
    }
}

export default new PetProjectDataService()