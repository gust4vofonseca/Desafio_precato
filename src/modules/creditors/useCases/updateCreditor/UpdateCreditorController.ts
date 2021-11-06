import { Request, Response} from "express";
import { container } from "tsyringe";

import { UpdateCreditorUseCase } from "./UpdateCreditorUseCase";

class UpdateCreditorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, CPF, status } = request.body;
        
        const updateCreditorUseCase = container.resolve(UpdateCreditorUseCase);

        await updateCreditorUseCase.execute({
            name, 
            CPF,
            status
        });

        return response.status(201).send();
    }
}

export { UpdateCreditorController };
