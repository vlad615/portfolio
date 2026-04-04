import { AboutProps } from "../../aboutMe/AboutMe"
import { AboutSection } from "./sections/AboutSection"
import { Facts } from "./sections/Facts"
import { SkillSection } from "./sections/SkillSection"



export const About = (props: AboutProps) => {
    return(
        <>
            <AboutSection {...props}/>
            <SkillSection />
            <Facts />
        </>
        
    )
}

