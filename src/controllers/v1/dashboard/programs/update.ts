import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Program } from "../../../../models/programs";

const updateProgram = async (req: Request, res: Response) => {
  try {
    const { name, desc, image_url } = req.body;

    const program = await Program.findById(req.params.id);
    if (!program) {
      throw new BadRequestError("Program not found");
    }

    if (name) program.name = name;
    if (desc) program.desc = desc;
    if (image_url) program.image_url = image_url;
    await program.save();

    return res
      .status(200)
      .json({ message: "program updated successfully", data: program });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { updateProgram as updateProgramHandler };
