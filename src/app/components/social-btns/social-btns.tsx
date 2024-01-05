import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/dhenzel_nexxus/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/dhenzel-lima-00aa39251/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/DhenzelNexxus">
                <GitHubIcon/>
            </a>
        </div>
    )
}