import { model, Schema, Document } from "mongoose";
import { Package } from "../proto/package/Package";

const PackageSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    weight: { type: Number, required: true },
    isAvailable: { type: Boolean, required: true, default: true },
    isReceived: { type: Boolean, required: true, default: false },
    depositorId: {
      type: String,
      //ref: 'User',
      required: false, // change to true later after connect to User Manangement Service
    },
    depositeeId: {
      type: String,
      //ref: 'User',
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const PackageModel = model<Package & Document>("Package", PackageSchema);
