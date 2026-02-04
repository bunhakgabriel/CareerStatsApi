import jogadorRepository from "../repositories/jogadorRepository.js";

const jogadorService = {
  async getJogadores() {
    const jogadores = await jogadorRepository.getJogadores();
    return jogadores;
  },
};

export default jogadorService;
