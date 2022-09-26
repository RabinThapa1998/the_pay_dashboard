import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Contestent } from "../../../../models/contestents";
import { Payment } from "../../../../models/payment";

const createPayment = async (req: Request, res: Response) => {
  try {
    const { payment_type, amount, vote, contestent } = req.body;
    const _payment = await Payment.findOne({ contestent });
    if (_payment) {
      throw new BadRequestError("Payment already made");
    }
    const _contestent = await Contestent.findById(contestent);
    if (!_contestent) {
      throw new BadRequestError("Contestent not found");
    }
    const payment = Payment.build({
      payment_type,
      amount,
      vote,
      contestent,
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
