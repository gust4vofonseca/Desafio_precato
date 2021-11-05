import { Request, Response} from "express";
import { container } from "tsyringe";

import { CreateCreditorUseCase } from "./CreateCreditorUseCase";

class CreateCreditorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, CPF, status } = request.body;
        
        const createCreditorUseCase = container.resolve(CreateCreditorUseCase);

        await createCreditorUseCase.execute({
            name, 
            CPF,
            status
        });

        return response.status(201).send();
    }
}

export { CreateCreditorController };
