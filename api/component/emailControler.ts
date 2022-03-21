import { Request, Response, NextFunction } from "express";
import sgMail from "@sendgrid/mail";

export const sendEmail = (req: Request, res: Response, next: NextFunction) => {
  const { provider, to, cc, bcc, subject, body } = req.body;
  if (provider === "SendGrid") {
    sgMail.setApiKey(
      "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"
    );

    const message = {
      from: "balajimohan0812@gmail.com",
      to,
      cc,
      bcc,
      subject,
      text: body
    };

    sgMail
      .send(message)
      .then(() => {
        res.status(200).json({ data: "success" });
      })
      .catch((error) => {
        res.status(500).json({ error: "Internal Server Error" });
      });
  }
};
