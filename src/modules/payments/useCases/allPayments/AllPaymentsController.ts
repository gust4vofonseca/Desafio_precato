import { Request, Response } from "express";
import { container } from "tsyringe";

import { AllPaymentsUseCase } from "./AllPaymentsUseCase";

class AllPaymentsController {
    async handle(request: Request, response: Response): Promise<Response> {

        const allPaymentsUseCase = container.resolve(AllPaymentsUseCase);

        const payments = await allPaymentsUseCase.execute();

        return response.json({payments});
    }
}

export { AllPaymentsController };