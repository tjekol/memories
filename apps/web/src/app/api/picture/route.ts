import {NextResponse} from 'next/server';

export function GET(request: Request) {

  return NextResponse.json({
    message: 'i am trying to send a fucking image', request,
  });
}