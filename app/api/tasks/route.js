import connectMongoDb from "@/libs/mongodb";
import Task from "@/models/task";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {title, description } = await request.json();
    await connectMongoDb();
    await Task.create({title, description});
    return NextResponse.json({message: "Task Created"}, {status: 201});
}


export async function GET() {
    await connectMongoDb();
    const tasks = await Task.find();
    return NextResponse.json({ tasks });
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: "Task Deleted"}, { status: 200 });
}