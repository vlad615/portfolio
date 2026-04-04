import { AboutProps } from "../../aboutMe/AboutMe"
import { AboutSection } from "./sections/AboutSection"
import { SkillSection } from "./sections/SkillSection"



export const About = (props: AboutProps) => {
    return(
        <>
            <AboutSection {...props}/>
            <SkillSection />
        </>
        
    )
}

