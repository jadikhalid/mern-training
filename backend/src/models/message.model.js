import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: string,
      required: true,
    },
    receiverid: {
      type: string,
      required: true,
    },
    message: {
      type: string,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
