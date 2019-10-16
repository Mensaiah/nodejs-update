const mongoose = require("mongoose");
const { Schema } = mongoose;
const urlShortenSchema = new Schema({

  CloudinaryUrl: String,
  urlCode: String,
  shortUrl: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
export default mongoose.model("ShorternLink", urlShortenSchema);