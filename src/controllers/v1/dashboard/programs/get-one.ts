import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Contestent } from "../../../../models/contestents";
import { Program } from "../../../../models/programs";

const getOneProgram = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const program = await Program.findById(id);

    if (!program) {
      throw new BadRequestError("Program not found");
    }

    const contestents = await Contestent.find({ program: id });

    return res.status(200).json({ data: { program, contestents } });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { getOneProgram as getOneProgramHandler };
