import { NextFunction, Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Contestent } from "../../../../models/contestents";
import { Payment } from "../../../../models/payment";
import { Program } from "../../../../models/programs";

const createContestent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { full_name, age, address, program, phone, email } = req.body;

    const _program = await Program.findById(program);

    if (!_program) {
      return res.status(422).json({ message: "Program not found" });
    }

    const contestent = await Contestent.findOne({ email });

    if (contestent) {
      throw new BadRequestError("Contestent already exists");
    }
    //create payment for that contestent and assign the payment id to the contestent
    const payment = await Payment.build({
      payments: [{}],
    }).save();
    if (!payment) {
      throw new BadRequestError("payment create failed");
    }
    const _contestent = await Contestent.build({
      email,
      full_name,
      program,
      payment: payment._id,
      address,
      age,
      phone,
    }).save();

    if (!_contestent) {
      throw new BadRequestError("Contestent not created");
    }

    return res.status(200).json({
      message: "Contestent added successfully",
      data: _contestent,
    });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { createContestent as createContestentHandler };
