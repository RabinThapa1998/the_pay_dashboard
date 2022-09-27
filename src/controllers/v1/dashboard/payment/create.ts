import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Payment } from "../../../../models/payment";

const createPayment = async (req: Request, res: Response) => {
  try {
    const { payment_type, amount, vote, contestent } = req.body;
    const _payment = await Payment.findOne({ contestent });
    if (_payment) {
      throw new BadRequestError("Payment Account already created");
    }

    const payment = Payment.build({
      payment_type,
      amount,
      vote,
    });
    await payment.save();
    if (!payment) {
      throw new BadRequestError("Payment not created");
    }
    return res.status(201).json({ data: payment });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { createPayment as createPaymentHandler };
