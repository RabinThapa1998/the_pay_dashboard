import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Contestent } from "../../../../models/contestents";

const deleteContestent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contestent = await Contestent.deleteOne({ _id: id });
    if (!contestent) {
      throw new BadRequestError("Contestent not found");
    }

    return res
      .status(200)
      .json({ message: "deleted successfully", data: contestent });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { deleteContestent as deleteContestentHandler };
