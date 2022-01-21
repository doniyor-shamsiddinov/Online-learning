import { HomeWrapper } from './style'
import Hero from '../layouts/hero'
import Clients from '../layouts/clients'
import AllInOne from '../layouts/allInOn'
import Skilline from '../layouts/skilline'
import ClassRoom from '../layouts/classRoom'
import Features from '../layouts/features'
import TeachersTool from '../layouts/teachersTool'
import Assestment from '../layouts/assestment'
import ClassManagment from '../layouts/classManagment'

export default function Home () {
    return (
        <HomeWrapper>
            <Hero/>
            <Clients/>
            <AllInOne/>
            <Skilline/>
            <ClassRoom/>
            <Features/>
            <TeachersTool/>
            <Assestment/>
            <ClassManagment/>
        </HomeWrapper>
    )
}