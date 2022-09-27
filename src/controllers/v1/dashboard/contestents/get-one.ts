import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Contestent } from "../../../../models/contestents";

const getOneContestent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const contestent = await Contestent.findById(id)
      .populate("program")
      .populate("payment");
    if (!contestent) {
      throw new BadRequestError("Contestent not found");
    }

    return res.status(200).json({ data: contestent });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { getOneContestent as getOneContestentHandler };
