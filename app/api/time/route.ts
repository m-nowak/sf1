import { NextResponse } from 'next/server'

export const dynamic = "force-dynamic";

export async function GET() {
          const currentTime = new Date().toISOString()
          return NextResponse.json({ currentTime })
}
