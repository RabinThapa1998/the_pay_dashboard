import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Program } from "../../../../models/programs";

const getOneProgram = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const program = await Program.findById(id);

    if (!program) {
      throw new BadRequestError("Program not found");
    }

    return res.status(200).json({ message: "Program", data: program });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { getOneProgram as getOneProgramHandler };
