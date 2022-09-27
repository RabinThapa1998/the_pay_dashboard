import { Request, Response } from "express";
import { BadRequestError } from "../../../../common/errors/bad-request-error";
import { Contestent } from "../../../../models/contestents";

const getContestents = async (req: Request, res: Response) => {
  try {
    const contestents = await Contestent.find();

    if (!contestents) {
      throw new BadRequestError("Contestents not found");
    }

    return res.status(200).json({ data: contestents });
  } catch (error) {
    throw new BadRequestError(
      (error as any).message
        ? (error as any).message
        : "Failed to create Contestent. Debug Backend!"
    );
  }
};

export { getContestents as getContestentsHandler };
