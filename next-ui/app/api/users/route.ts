import { NextResponse } from "next/server"
import { createUser, getUsers } from '@/app/lib/userApiService';


export async function GET() {
    console.log('IN GETETETS');
    let users = await getUsers();
    return NextResponse.json({
        users
    })
    // return NextResponse.json({
    //     hello: 'world'
    // })
}

export async function POST(request: Request) {
    const body = await request.json();
    
    // return new Response
    let newUser = await createUser(body.username, body.email);
    console.log('jahowijef9wnc98qd98qh9');
    
    console.log(newUser[0]);
    return NextResponse.json({
        newUser
    })
    // const data = await request.json();  
    // return NextResponse.json({
    //     data,
    // });
    // const data = await request.json()
}