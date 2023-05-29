import { DivPage, DivVideo, DivContainer, DivForm, VideoPlay } from "./styledCreateDog";
import videoDog from '../../utils/video/videodog.mp4';
import { useState } from "react";
import { validation } from "./validation";

const CreateDog = () => {

    const [formData, setFormData] = useState({
        name: '',
        imagen: '',
        minimumHeight: "",
        maximumHeight: "",
        minimumWeight: "",
        maximumWeight: "",
        yearsLife: 0,
    })

    const [ errors, setErros ] = useState({});

    const handleChangle = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        setErros(validation({
            ...formData,
            [e.target.name] : e.target.value,
        }))
    }

    return (
        <DivPage>
            <DivContainer>
            <DivVideo>
                    <VideoPlay src={videoDog} autoPlay muted loop/>
            </DivVideo>
            <DivForm>
                <h1>CREATE YOUR DOG BREED</h1>
                <form action="">
                    <input type="text" name="name" placeholder="Breed name" value={formData.name} onChange={handleChangle}/>
                    {
                        (errors.name) ? <span>{errors.name}</span> : null
                    }
                    <br />
                    <input type="text" name="imagen" placeholder="image url" value={formData.imagen} onChange={handleChangle}/>
                    {
                        (errors.imagen) ? <span>{errors.imagen}</span> : null
                    }
                    <br />
                    <label htmlFor="">Height</label>
                    <br />
                    <input type="text" name="minimumHeight" placeholder="Minimum" value={formData.minimumHeight} onChange={handleChangle}/>
                    <input type="text" name="maximumHeight" placeholder="Maximum" value={formData.maximumHeight} onChange={handleChangle}/>
                    {
                        (errors.height) ? <span>{errors.height}</span> : null
                    }
                    <br />
                    <label htmlFor="">Weight</label>
                    <br />
                    <input type="text" name="minimumWeight" placeholder="Minimum" value={formData.minimumWeight} onChange={handleChangle}/>
                    <input type="text" name="maximumWeight" placeholder="Maximum" value={formData.maximumWeight} onChange={handleChangle}/>
                    {
                        (errors.weight) ? <span>{errors.weight}</span> : null
                    }
                    <br />
                    <label htmlFor="">Year of life</label>
                    <input type="number" name="yearsLife" className="number" value={formData.yearsLife} onChange={handleChangle}/>
                    {
                        (errors.yearslife) ? <span>{errors.yearslife}</span> : null
                    }
                    <br />
                    <button type='submit'>CREATE</button>

                </form>
            </DivForm>
            </DivContainer>
        </DivPage>
    )
}

export default CreateDog;