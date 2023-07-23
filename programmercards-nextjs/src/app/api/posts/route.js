import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongdb";
import Post from "../../../../models/post";

export async function POST(request) {
    const {
        userID,
        title,
        content,
        userName,
        userTitle,
        technology,
        linkedin,
        github,
        twitter,
    } = await request.json();
    await connectMongoDB();
    await Post.create({
        userID,
        title,
        content,
        userName,
        userTitle,
        technology,
        linkedin,
        github,
        twitter,
    });
    return NextResponse.json({ message: "Post Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    try {
        const posts = await Post.find({});
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 501 });
    }
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post Deleted" }, { status: 200 });
}
