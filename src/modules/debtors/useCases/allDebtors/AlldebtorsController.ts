import { Request, Response } from "express";
import { container } from "tsyringe";
import { AllDebtorsUseCase } from "./AllDebtorsUseCase";

class AllDebtorsController {
    async handle(request: Request, response: Response): Promise<Response> {
        
        const allDebtorsUseCase = container.resolve(AllDebtorsUseCase);

        const debtors = await allDebtorsUseCase.execute();

        return response.json({debtors});
    }
}

export { AllDebtorsController };