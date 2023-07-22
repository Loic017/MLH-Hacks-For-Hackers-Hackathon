import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    userID: String,
    title: String,
    content: String,
    userName: String,
    userTitle: String,
    technology: String,
    linkedin: String,
    github: String,
    twitter: String,
});

const Post = mongoose.model("Post", postSchema);

export default Post;
