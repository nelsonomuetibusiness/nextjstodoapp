import connectMongoDb from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Task from "@/models/task";

export async function PUT( request, { params }) {
    const {id} = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDb();
    await Task.findByIdAndUpdate(id, {title, description });
    return NextResponse.json ({message: "Task Updated"}, { status: 200});
}



export async function GET(request, { params }) {
    const {id} = params;
    await connectMongoDb();
    const task = await Task.findOne({ _id: id });
    return NextResponse.json( {task}, { status: 200});
}