import React from "react"
import cardData from "../services/cradData"
import { useParmas } from 'react-router-dom'
 

const CardDetail = () => {
    const { id } = useParmas();
    const cardDetail = cardData.find(item => item.id === parseInt(id));

return (
    <>
        <main className='flex-grow'>
            <div className='container mx-auto py-10 px-4'>
                <div className= 'mt-8 bg-white rounded-lg shadow-lg md:flex-row'>
                    <div className="md:w-1/2 w-full">
                        <img src={cardDetail.imageUrl} alt="" />
                    </div>
                </div>

                <div className="md:w-1/2 w-full p-6 flex flex-col">
                <h1 className="text-3x1 font-bold md-4 text-purple-800">{cardDetail.title} </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">{cardDetail.description}</p>
                    </div>
            </div>
        </main>
    </>
    )
    }

    export default CardDetail