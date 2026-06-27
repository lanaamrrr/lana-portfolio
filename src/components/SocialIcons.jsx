import {

FaGithub,

FaLinkedin,

FaEnvelope

} from "react-icons/fa";

import { personalInfo } from "../constants/data";

function SocialIcons() {

return (

<div className="flex gap-5 mt-10">

<a

href={personalInfo.github}

target="_blank"

rel="noreferrer"

className="text-2xl hover:text-violet-400 transition"

>

<FaGithub/>

</a>

<a

href={personalInfo.linkedin}

target="_blank"

rel="noreferrer"

className="text-2xl hover:text-violet-400 transition"

>

<FaLinkedin/>

</a>

<a

href={`mailto:${personalInfo.email}`}

className="text-2xl hover:text-violet-400 transition"

>

<FaEnvelope/>

</a>

</div>

);

}

export default SocialIcons;