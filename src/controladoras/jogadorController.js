import ApiResponse from "../classes/ApiResponse.js";
import jogadorService from "../servicos/jogadorService.js";

const jogadorController = {
  async getJogadores(req, res, next) {
    try {
      const jogadores = await jogadorService.getJogadores();
      res
        .status(200)
        .json(
          new ApiResponse(
            true,
            "Solicitação realizada com sucesso!",
            jogadores,
          ),
        );
    } catch (error) {
      next(error);
    }
  },
};

export default jogadorController;
