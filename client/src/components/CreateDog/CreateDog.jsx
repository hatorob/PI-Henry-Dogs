import { DivPage, DivVideo, DivContainer, DivForm, VideoPlay } from "./styledCreateDog";
import videoDog from '../../utils/video/videodog.mp4';

const CreateDog = () => {
    return (
        <DivPage>
            <DivContainer>
            <DivVideo>
                    <VideoPlay src={videoDog} autoPlay muted loop/>
            </DivVideo>
            <DivForm>
                <h1>CREATE YOUR DOG BREED</h1>
                <form action="">
                    <input type="text"  placeholder="Breed name"/>
                    <br />
                    <input type="text"  placeholder="image url"/>
                    <br />
                    <label htmlFor="">Height</label>
                    <br />
                    <input type="text"  placeholder="Minimum"/>
                    <input type="text"  placeholder="Maximum"/>
                    <br />
                    <label htmlFor="">Weight</label>
                    <br />
                    <input type="text"  placeholder="Minimum"/>
                    <input type="text"  placeholder="Maximum"/>
                    <br />
                    <label htmlFor="">Year of life</label>
                    <input type="number" name="" id="" className="number"/>
                    <br />
                    <button type='submit'>CREATE</button>

                </form>
            </DivForm>
            </DivContainer>
        </DivPage>
    )
}

export default CreateDog;