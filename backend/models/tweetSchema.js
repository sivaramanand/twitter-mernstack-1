import mongoose from "mongoose";
const tweetSchmea = new mongoose.Schema(
  {
    description: {
      type: String,
      requied: true,
    },
    like: {
      type: Array,
      default: [],
    },
    bookmarks: {
      type: Array,
      default: [],
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      extended: true,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("Tweet", tweetSchmea);
