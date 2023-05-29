import { DivPage, DivVideo, DivContainer, DivForm, VideoPlay, DivErrors, DivBolitas, DivBolitasDos, DivBolitasTres, DivBolitasCuatro } from "./styledCreateDog";
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
                    <br />
                    <input type="text" name="imagen" placeholder="image url" value={formData.imagen} onChange={handleChangle}/>
                    <br />
                    <label htmlFor="">Height</label>
                    <br />
                    <input type="text" name="minimumHeight" placeholder="Minimum" value={formData.minimumHeight} onChange={handleChangle}/>
                    <input type="text" name="maximumHeight" placeholder="Maximum" value={formData.maximumHeight} onChange={handleChangle}/>
                    <br />
                    <label htmlFor="">Weight</label>
                    <br />
                    <input type="text" name="minimumWeight" placeholder="Minimum" value={formData.minimumWeight} onChange={handleChangle}/>
                    <input type="text" name="maximumWeight" placeholder="Maximum" value={formData.maximumWeight} onChange={handleChangle}/>
                    <br />
                    <label htmlFor="">Year of life</label>
                    <input type="number" name="yearsLife" className="number" value={formData.yearsLife} onChange={handleChangle}/>
                    <br />
                    <button type='submit'>CREATE</button>
                </form>
            </DivForm>
                <DivErrors>
                    {
                        (errors.name || errors.name || errors.imagen || errors.height || errors.weight || errors.yearslife) 
                                        ? <DivBolitas> 
                                        <DivBolitasDos>
                                        </DivBolitasDos>
                                        <DivBolitasTres>
                                        </DivBolitasTres> 
                                        <DivBolitasCuatro>
                                        </DivBolitasCuatro> 
                                    </DivBolitas> 
                                : null
                    }
                    {
                        (errors.name) ? <span> <b>Name:</b> {errors.name}</span> : null
                    }
                    {
                        (errors.imagen) ? <span>  <b>Image:</b> {errors.imagen}</span> : null
                    }
                    {
                        (errors.height) ? <span> <b>Height:</b> {errors.height}</span> : null
                    }
                    {
                        (errors.weight) ? <span> <b>Weight:</b> {errors.weight}</span> : null
                    }
                    {
                        (errors.yearslife) ? <span> <b>Years of life:</b> {errors.yearslife}</span> : null
                    }
                </DivErrors>
            </DivContainer>
        </DivPage>
    )
}

export default CreateDog;