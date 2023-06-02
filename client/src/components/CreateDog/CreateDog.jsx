import { DivPage, DivVideo, DivContainer, DivForm, VideoPlay, DivErrors, DivBolitas, DivBolitasDos, DivBolitasTres, DivBolitasCuatro } from "./styledCreateDog";
import videoDog from '../../utils/video/videodog.mp4';
import { useState } from "react";
import { validation } from "./validation";
import {  useSelector, useDispatch } from 'react-redux';
import { createDog } from "../../redux/actions";
import { useNavigate } from 'react-router-dom';

const CreateDog = () => {
    

    const dispatch = useDispatch();
    const temperaments = useSelector( state => state.temperaments );
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        imagen: '',
        minimumHeight: "",
        maximumHeight: "",
        minimumWeight: "",
        maximumWeight: "",
        temperaments: [],
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

    const handleOptionsClick = (e) => {
        const temperamentId = e.target.value;
        const upTemperaments = formData.temperaments || [];
        if(!upTemperaments.includes(Number(temperamentId))) {
            let result = [...upTemperaments,Number(temperamentId)];
            setFormData({
                ...formData,
                temperaments: result,
            })
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(errors.name) {
            alert(errors.name);
        }
        if(errors.imagen) {
            alert(errors.imagen);
        }
        if(errors.height || errors.weight) {
            alert(errors.height || errors.weight);
        }
        if(errors.yearslife) {
            alert(errors.yearslife)
        }

        if(!errors.name && !errors.imagen && !errors.height && !errors.weight && !errors.yearslife) {
            const dog = {
                name: formData.name,
                image: formData.imagen,
                height: `${formData.minimumHeight} - ${formData.maximumHeight}`,
                weight: `${formData.minimumWeight} - ${formData.maximumWeight}`,
                yearsLife: formData.yearsLife.toString(),
                temperaments: formData.temperaments
            } 
            dispatch(createDog(dog)); 
            navigate("/home");
        }
        
    }

    return (
        <DivPage>
            <DivContainer>
            <DivVideo>
                    <VideoPlay src={videoDog} autoPlay muted loop/>
            </DivVideo>
            <DivForm>
                <h1>CREATE YOUR DOG BREED</h1>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Breed name" value={formData.name} onChange={handleChangle}/>
                    <input type="text" name="imagen" placeholder="image url" value={formData.imagen} onChange={handleChangle}/>
                    <br />
                    <label> Temperaments </label>
                    <select name="" id="" multiple>
                        {
                           Array.isArray(temperaments) && temperaments?.map( (temperaments, index) => {
                                return <option value={temperaments.id} key={index} name="temperaments" onClick={handleOptionsClick}>{temperaments.name}</option>
                            })
                        }
                    </select>
                    <ul>
                        {   
                            (Array.isArray(temperaments)) ?
                            formData.temperaments.map( id => {
                               return temperaments?.map( (temperament, index) =>  (temperament.id === id) ? <li key={index}>*{temperament.name}</li> : null)
                            })
                            : null
                        }
                    </ul>
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