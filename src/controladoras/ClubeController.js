import clubeService from "../servicos/clubeService.js";
import ApiResponse from "../classes/ApiResponse.js";

const clubeController = {
    async getClubes(req, res, next) {
        try {
            const clubes = await clubeService.getClubes();
            res
                .status(200)
                .json(
                    new ApiResponse(
                        true,
                        "Solicitação realizada com sucesso!",
                        clubes,
                    ),
                );
        } catch (error) {
            next(error);
        }
    }
}

export default clubeController;