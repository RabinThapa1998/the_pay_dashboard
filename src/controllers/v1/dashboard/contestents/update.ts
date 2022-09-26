import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Contestent } from "../../../../models/contestents";

const updateContestent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { full_name, age, address, program, phone, email } = req.body;
    const contestent = await Contestent.findOne({ _id: id });
    if (!contestent) {
      throw new BadRequestError("Contestent not found");
    }

    contestent.email = email || contestent.email;
    contestent.full_name = full_name || contestent.full_name;
    contestent.program = program || contestent.program;
    contestent.address = address || contestent.address;
    contestent.age = age || contestent.age;
    contestent.phone = phone || contestent.phone;

    await contestent.save();

    return res
      .status(200)
      .json({ message: "Updated successfully", data: contestent });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { updateContestent as updateContestentHandler };
