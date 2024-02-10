import { useState } from "react"
import ImageUser from '../assets/img/image/user.png';

const useRegister = () => {
    const [register, setRegister] = useState({
        user: '',
        email: '',
        password: ''
    })

    const [photoPerfile, setPhotoPerfile] = useState(ImageUser);

    const handleObtainDataUser = (e) => {
        setRegister({
            ...register,
            [e.target.name] : e.target.value
        })
    }

    const handleUpdatePhotoPerfile =(e) => {
        setPhotoPerfile(e.target.value)
    }

    return {handleUpdatePhotoPerfile, photoPerfile, setPhotoPerfile, register, handleObtainDataUser}
}

export default useRegister