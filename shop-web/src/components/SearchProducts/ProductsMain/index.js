import axios from "axios";
import { useEffect, useState } from "react";
import './style.css'
import '../../../App.css'

const ProductsMain = () => {
    const [response, setResponse] = useState('');
    const [optionSearch, setOptionSearch] = useState('electronics')

   useEffect(() => {
    const shopFake = async () => {
        try {
            const respon = await axios.get('https://fakestoreapi.com/products');
            return setResponse(respon.data)
        } catch (error) {
            console.error(error)
        }
    }

    shopFake()
    console.log('-->', response)
   }, [])

    return(
        <>
            <main className="productstore">
                <article className="productstore__article">
                    <section className="productstore__titleandsearch">
                        <div className="productstore__titlewebsite">
                            <h1>
                                SHOP WEB
                            </h1>
                        </div>

                        <div className="productstore__contentsectionbutton">
                            <section className="productstore__contentbuttons">
                                <button onClick={() => setOptionSearch('electronics')}>
                                    Electronics
                                </button>
                                <button onClick={() => setOptionSearch('jewelery')}>
                                    Jewelery
                                </button>
                                <button onClick={() => setOptionSearch("men's clothing")}>
                                    Men's clothing
                                </button>
                                <button onClick={() => setOptionSearch("women's clothing")}>
                                    Women's clothing                                
                                </button>
                            </section>
                        </div>
                    </section>

                    <section className="productstore__products">
                        {
                            response != '' && response.map(response => 
                                {
                                    if(optionSearch == response.category){
                                        return(
                                            <article className="productstore__articleproduct">
                                                <section className="productstore__imageofproduct">
                                                    <img src={response.image} />
                                                </section>

                                                <section className="productstore__informationproduct">
                                                    <div className="productstore__nameanddescriptionproduct">
                                                        <div className="productstore__titleproduct">
                                                            <p>
                                                                {
                                                                    response.title
                                                                }
                                                            </p>
                                                        </div>

                                                        <div className="productstore__descriptionproduct">
                                                            <p>
                                                                Description
                                                            </p>

                                                            <p>
                                                                {
                                                                    response.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="productstore__contentpriceproduct">
                                                        <span className="productstore__priceproduct">
                                                            ${
                                                                response.price
                                                            }
                                                        </span>
                                                    </div>
                                                </section>
                                            </article>
                                        )
                                    }
                                }
                            ) 
                        }
                    </section>
                </article>
            </main>
        </>
    )
}

export default ProductsMain;