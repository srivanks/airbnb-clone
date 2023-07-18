'use client'
import { format } from 'date-fns'
import { Listing, Reservation, User } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useCallback, useMemo } from 'react'
import useCountries from '../hooks/useCountries'
import Image from 'next/image'
import HeartButton from './HeartButton'

interface ListingCardProps {
  data: Listing
  reservation?: Reservation
  onAction: (id: string) => void
  disabled: boolean
  actionLabel?: string
  actionId: string
  currentUser: User | null
}

function ListingCard({
  actionId,
  currentUser,
  data,
  disabled,
  onAction,
  actionLabel,
  reservation,
}: ListingCardProps) {
  const router = useRouter()
  const { getByValue } = useCountries()
  const location = getByValue(data.locationValue)
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      if (disabled) return
      onAction?.(actionId)
    },
    [onAction, actionId, disabled]
  )

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice
    }
    return data.price
  }, [data.price, reservation])
  const reservationData = useMemo(() => {
    if (!reservation) {
      return null
    }
    const start = new Date(reservation.startDate)
    const end = new Date(reservation.endDate)
    return `${format(start, 'PP')} - ${format(end, 'PP')}`
  }, [reservation])

  return (
    <div
      className="ol-span-1 cursor-pointer group"
      onClick={() => {
        router.push(`/listings/${data.id}`)
      }}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            alt="Listing"
            src={data.imageSrc}
            className="object-cover h-full w-full group-hover:scale-10 transition"
          />
          <div className='absolute top-3 right-3'>
            <HeartButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingCard
