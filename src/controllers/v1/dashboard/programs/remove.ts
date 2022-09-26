import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Program } from "../../../../models/programs";

const deleteProgram = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const program = await Program.deleteOne({ _id: id });
    if (!program) {
      throw new BadRequestError("Program not found");
    }

    return res
      .status(200)
      .json({ message: "program deleted successfully", data: program });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { deleteProgram as deleteProgramHandler };
