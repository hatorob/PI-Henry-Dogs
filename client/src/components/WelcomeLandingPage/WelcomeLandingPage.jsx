import { DivPage, DivContainer, DivWelcome, DivVideo, VideoPlay, H1, P, ImageDog, ButtonLogin } from './styled';
import videoDog from '../../utils/video/videodog.mp4';
import imgDog from '../../utils/img/dog.png'
const WelcomeLandingPage = ({login}) => {

    return (
        <DivPage>
            <DivContainer>
                <DivWelcome>
                    <H1>BIENVENIDO</H1>
                    <P>A TÚ APP DE</P>
                    <div>
                        <ImageDog src={imgDog} />
                    </div>
                    <ButtonLogin type='submit' onClick={login}> ENTRAR </ButtonLogin>
                    
                </DivWelcome>
                <DivVideo>
                    <VideoPlay src={videoDog} autoPlay muted loop/>
                </DivVideo>
            </DivContainer>
        </DivPage>
    )
}

export default WelcomeLandingPage;