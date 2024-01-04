import { genPageMetadata } from 'app/seo'
import Frontend from './components/Frontend'
import Backend from './components/Backend'
import Devops from './components/Devops'
import Graphics from './components/Graphics'
import DigitalProduct from './components/DigitalProduct'

export const metadata = genPageMetadata({ title: 'Tech', description: 'Things I use for work' })

export default async function Page() {
  return (
    <>
      <Frontend />
      <Backend />
      <Devops />
      {/* <DigitalProduct /> */}
      <Graphics />
    </>
  )
}
