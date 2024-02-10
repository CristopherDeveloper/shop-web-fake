import useRegister from "../../../hooks/useRegister";
import '../../../App.css'
import './style.css'
import { useEffect, useState } from "react";

const MESSAGE = {
    ERROR: 'Error',
    WARNING: 'Warning',
    INFO: 'Info'
}

const HeaderProduct = () => {
    const {handleUpdatePhotoPerfile, photoPerfile, setPhotoPerfile, register, handleObtainDataUser} = useRegister()
    const [openLogin, setOpenLogin] = useState('login')
    const [warningOfRegister, setWarningOfRegister] = useState('');
    const [keyRegister, setKeyRegister] = useState(false);

    const handleVerifyInformationData = () => {
        if(register.user != '' && register.user.length >= 5){
            if(register.email.search('@') >= 0 && register.email.search('gmail.com') >= 0){
                if(register.password.length >= 8){
                    setOpenLogin('login')
                    const body = document.body.style.overflow = 'overlay';
                    setKeyRegister(true)
                }else{
                    console.log(MESSAGE.INFO, '--> Password [8]')
                }
            }else{
                console.log(MESSAGE.INFO, '--> Email [@ or gmail.com')
            }
        }else{
            console.log(MESSAGE.INFO, '--> User [5]')
        }
    }


    return(
        <header className="header">
            <article className="header__article">
                <section className="header__section">
                    <nav className="header__nav">
                        <div className="header__perfile">
                            <button className="header__favorites">
                                <img />
                                <p>
                                    Your products favorites
                                </p>
                            </button>
                        </div>

                        <div className="header__userinformation">
                            <section className="header__userandimagephotoperfile">
                                {
                                    keyRegister != false
                                    ? <><p className="header__nameuser"><span>{register.user}</span></p> <img className="header__imagephotoofperfile" src={photoPerfile} /></>
                                    : <button className="header__buttonregister" onClick={() => {
                                        setOpenLogin('login open')
                                        const body = document.body.style.overflow = 'hidden';
                                    }}>Register</button>
                                }

                                <img />
                            </section>
                        </div>
                    </nav>
                </section>
            </article>

            <article className={openLogin}> 
                <section className="login__section">
                    <section className="login__title">
                        <h2>
                            REGISTER!!
                        </h2>
                    </section>

                    <section className="login__yourphotoperfile">
                        <img src={photoPerfile} />

                        <input onChange={(e) => handleUpdatePhotoPerfile(e)} placeholder="Url" />
                    </section>
                    
                    <section className="login__contentform">
                        <form className="login__form">
                            <div className="login__registerform">
                                <label name='name'>
                                    <img />
                                </label>

                                <input 
                                    value={register.user}
                                    onChange={(e) =>  handleObtainDataUser(e)}
                                    placeholder="User"
                                    name="user"
                                    type="text"
                                />

                                <p>
                                    <span>
                                        {
                                            warningOfRegister
                                        }
                                    </span>
                                </p>
                            </div>
                            
                            <div className="login__registerform">
                                <label name='name'>
                                    <img />
                                </label>

                                <input 
                                    value={register.email}
                                    onChange={(e) =>  handleObtainDataUser(e)}
                                    placeholder="Email"
                                    name="email"
                                    type="email"
                                />

                                <p>
                                    <span>
                                        {
                                            warningOfRegister
                                        }
                                    </span>
                                </p>
                            </div>

                            <div className="login__registerform">
                                <label name='name'>
                                    <img />
                                </label>

                                <input 
                                    value={register.password}
                                    onChange={(e) =>  handleObtainDataUser(e)}
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                />

                                <p>
                                    <span>
                                        {
                                            warningOfRegister
                                        }
                                    </span>
                                </p>
                            </div>
                        </form>
                    </section>
                    
                    <section className="login__contentedbutton">
                        <button onClick={() => {
                                handleVerifyInformationData()
                            }}>
                            Register
                        </button>
                    </section>
                </section>
            </article>
        </header>
    )
}

export default HeaderProduct;