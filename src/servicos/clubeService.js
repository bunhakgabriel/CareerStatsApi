import clubeRepository from "../repositories/clubeRepository.js"

const clubeService = {
   async getClubes() {
        const clubes = await clubeRepository.getClubes();
        return clubes;
   },

   async postClube(clube){
        await clubeRepository.postClube(clube);
        return true;
   }
}

export default clubeService;