import prisma from '@/app/libs/prismadb'

export async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return listings
  } catch (e: any) {
    throw new Error(e)
  }
}
