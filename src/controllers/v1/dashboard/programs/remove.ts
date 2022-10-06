import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Program } from "../../../../models/programs";
import { Contestant } from "../../../../models/contestants";

const deleteProgram = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log("🚀 ~ file: remove.ts ~ line 9 ~ deleteProgram ~ id", id);

    const _program = await Program.findById(id);

    if (!_program) {
      throw new BadRequestError("Program not found");
    }
    const _contestant = await Contestant.deleteMany({ program: id });
    console.log(
      "🚀 ~ file: remove.ts ~ line 16 ~ deleteProgram ~ _contestant",
      _contestant
    );

    const program = await Program.deleteOne({ _id: id });

    return res.status(200).json({
      message: "program deleted successfully",
      data: program,
      contestant: _contestant.deletedCount,
    });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { deleteProgram as deleteProgramHandler };
