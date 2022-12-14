import ExperienceForm from "./experience/ExperienceForm";
import ExtraDisplay from "./extra/ExtraDisplay";
import PersonalDisplay from "./personal/PersonalDisplay";
import EdDisplay from "./education/EdDisplay";



export default function ResumeData() {
  return (
    <>
    <div>ResumeData</div>
    <div>
        <ExperienceForm />
    </div>
    <div>
        <EdDisplay />
    </div>
    <div>
        <ExtraDisplay />
    </div>
    <div>
        <PersonalDisplay />
    </div>
    </>
  )
}
