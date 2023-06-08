import { DivPage, DivContainer, DivWelcome, DivVideo, VideoPlay, H1, P, ImageDog, ButtonLogin } from './styledWelcome';
import videoDog from '../../utils/video/videodog.mp4';
import imgDog from '../../utils/img/dog.png';


const WelcomeLandingPage = ({login}) => {

    return (
        <DivPage>
            <DivContainer>
                <DivWelcome>
                    <H1>WELCOME</H1>
                    <P>TO YOUR APPLICATION</P>
                    <div>
                        <ImageDog src={imgDog} />
                    </div>
                    <ButtonLogin type='submit' onClick={login}> ACCESS </ButtonLogin>
                </DivWelcome>
                <DivVideo>
                    <VideoPlay src={videoDog} autoPlay muted loop/>
                </DivVideo>
            </DivContainer>
        </DivPage>
    )
}

export default WelcomeLandingPage;