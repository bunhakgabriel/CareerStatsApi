import clubeRepository from "../repositories/clubeRepository.js"

const clubeService = {
   async getClubes() {
        const clubes = await clubeRepository.getClubes();
        return clubes;
   }
}

export default clubeService;