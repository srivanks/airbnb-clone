import React from 'react'
import Container from '../Container'
import { TbBeach } from 'react-icons/tb'
import {
  GiBarn,
  GiCastle,
  GiForestCamp,
  GiWindmill,
  GiCactus,
  GiBoatFishing,
  GiIsland,
  GiCaveEntrance,
} from 'react-icons/gi'

import { IoDiamond } from 'react-icons/io5'
import { BsSnow } from 'react-icons/bs'
import { TbMountain, TbPool } from 'react-icons/tb'
import { FaSkiing } from 'react-icons/fa'
import { MdOutlineVilla } from 'react-icons/md'
import CategoryBox from './CategoryBox'
import {
  useSearchParams,
  usePathname,
} from 'next/navigation'

type Props = {}

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property is has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern!',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This property is in the countryside!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This is property has a beautiful pool!',
  },
  {
    label: 'Islands',
    icon: GiIsland,
    description: 'This property is on an island!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This property is near a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This property has skiing activies!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This property is an ancient castle!',
  },
  {
    label: 'Caves',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This property offers camping activities!',
  },
  {
    label: 'Arctic',
    icon: BsSnow,
    description: 'This property is in arctic environment!',
  },
  {
    label: 'Desert',
    icon: GiCactus,
    description: 'This property is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This property is in a barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description:
      'This property is brand new and luxurious!',
  },
]
const Categories = (props: Props) => {
  const params = useSearchParams()
  const category = params?.get('category')

  const pathName = usePathname()
  const isMainPage = pathName === '/'

  if (!isMainPage) return null

  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((i) => {
          return (
            <CategoryBox
              key={i.label}
              label={i.label}
              selected={category === i.label}
              icon={i.icon}
            />
          )
        })}
      </div>
    </Container>
  )
}

export default Categories
