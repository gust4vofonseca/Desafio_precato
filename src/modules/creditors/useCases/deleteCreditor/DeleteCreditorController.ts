import { Request, Response} from "express";
import { container } from "tsyringe";

import { DeleteCreditorUseCase } from "./DeleteCreditorUseCase";

class DeleteCreditorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {CPF} = request.body;
        
        const deleteCreditorUseCase = container.resolve(DeleteCreditorUseCase);

        await deleteCreditorUseCase.execute(CPF);

        return response.status(201).send();
    }
}

export { DeleteCreditorController };
