import { HomeWrapper } from './style'
import Hero from '../layouts/hero'
import Clients from '../layouts/clients'
import AllInOne from '../layouts/allInOn'
import Skilline from '../layouts/skilline'

export default function Home () {
    return (
        <HomeWrapper>
            <Hero/>
            <Clients/>
            <AllInOne/>
            <Skilline/>
        </HomeWrapper>
    )
}