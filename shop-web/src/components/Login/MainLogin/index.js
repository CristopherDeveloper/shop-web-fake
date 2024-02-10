import './style.css';

import IconEmail from '../../../assets/img/icon/email.svg';
import IconPassword from '../../../assets/img/icon/lock.svg';
import IconUser from '../../../assets/img/icon/user.svg';
import useRegister from '../../../hooks/useRegister';
import { useEffect, useState } from 'react';

const MainLogin = () => {
    const {photoPerfile, setPhotoPerfile, register, handleObtainDataUser} = useRegister()
    const [disabled, setDisabled] = useState(true)
    const [styleClassDisabled, setStyleClassDisabled] = useState('mainlogin__butonregister buttondisabled')
    const [invalidString, setInvalidString] = useState('')

    const handleUpdatePhotoPerfile =(e) => {
        setPhotoPerfile(e.target.value)
    }

    const handleWarningPhotoPerfile = () => {
        if(photoPerfile != ''){
            return 'WARNING: It must be a VALID link, if it shows a corrupted image or nothing it is because the link is not valid'
        }
    }


    useEffect(() => {
        if(register.user != ''){
            if(register.user.length >= 3){
                if(register.email.length >= 4){
                    if(register.email.search('@gmail.com') > 0){
                        if(register.password.length >= 8){
                            setStyleClassDisabled('mainlogin__butonregister')
                            setInvalidString('CORRECT!')
                            setDisabled(false)
                        }else{
                            setStyleClassDisabled('mainlogin__butonregister buttondisabled')
                            setInvalidString('must be more than 8 characters: Password')
                        }
                    }else{
                        setStyleClassDisabled('mainlogin__butonregister buttondisabled')
                        setInvalidString('@gmail.com is missing: Email')
                    }
                }else{
                    setStyleClassDisabled('mainlogin__butonregister buttondisabled')
                    setInvalidString('must be more than 4 characters: Email')
                }
            }else{
                setStyleClassDisabled('mainlogin__butonregister buttondisabled')
                setInvalidString('must be more than 3 characters: User')
            }
        }else{
            setStyleClassDisabled('mainlogin__butonregister buttondisabled')
            setInvalidString('empty user form: User')
        }
    }, [register.user, register.email, register.password])


    return(
        <>
            <main className='main'>
                <article className='mainlogin'>
                    <section className='mainlogin__indication'>
                        <p>setPhotoPerfile
                            The username must be more than 3 characters without special signs
                        </p>

                        <p>
                            The profile photo is optional, it will not affect anything
                        </p>
                    </section>

                    <section className='mainlogin__register'>
                        <section className='mainlogin__yourphotoperfile'>
                            <div>
                                <img src={photoPerfile}/>
                            </div>

                            <div className='mainlogin__urlofphoto'>
                                <input onChange={(e) => handleUpdatePhotoPerfile(e)} type="text" placeholder="Url for the photo porfile"/>
                            </div>

                            <p className='mainlogin__warningphotoperfile'>
                                {handleWarningPhotoPerfile()}
                            </p>
                        </section>

                        <section className='mainlogin__contentform'>
                            <form className='mainlogin__form'>
                                <div className='mainlogin__completeregister'>
                                    <label>
                                        <img src={IconUser}/>
                                    </label>

                                    <input value={register.user} onChange={(e) => handleObtainDataUser(e)} name='user' type="text" placeholder="User"/>
                                </div>

                                <div className='mainlogin__completeregister'>
                                    <label>
                                        <img src={IconEmail} />
                                    </label>

                                    <input value={register.email} onChange={(e) => handleObtainDataUser(e)} name='email' type="email" placeholder="Email"/>
                                </div>

                                <div className='mainlogin__completeregister'>
                                    <label>
                                        <img src={IconPassword} />
                                    </label>

                                    <input value={register.password} onChange={(e) => handleObtainDataUser(e)} name='password' type="password" placeholder="Password"/>
                                </div>
                            </form>
                        </section>

                        <section className='mainlogin__contentbuttonofregister'>
                            <a href={'/search-products'}><button type='submit' className={styleClassDisabled} disabled={disabled}>Register </button></a>
                            <span>{invalidString}</span>
                        </section>
                    </section>
                </article>
            </main>
        </>
    )
}

export default MainLogin;