import { NextResponse } from 'next/server';
import { fetchMartaBuses, fetchMartaTrains } from '@/lib/marta';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const [buses, trains] = await Promise.allSettled([
      fetchMartaBuses(),
      fetchMartaTrains(),
    ]);

    return NextResponse.json({
      buses: buses.status === 'fulfilled' ? buses.value : [],
      trains: trains.status === 'fulfilled' ? trains.value : [],
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Transit API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transit data' },
      { status: 500 }
    );
  }
}
