import { Request, Response} from "express";
import { container } from "tsyringe";

import { AllCreditorsUseCase } from "./AllCreditorsUseCase";

class AllCreditorsController {
    async handle(request: Request, response: Response): Promise<Response> {
        
        const allCreditorsUseCase = container.resolve(AllCreditorsUseCase);

        const creditors = await allCreditorsUseCase.execute();

        return response.json({creditors});
    }
}

export { AllCreditorsController };
