import axios from "axios";
import React, { useState } from "react";

interface OwnProps{
    onOffModal: () => void
}

function AddClipModal({onOffModal}: OwnProps){
    const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
    const [inputKey, setInputKey] = useState<string>();


    return(
        <div className="Overlay">
            
                <div className="Modal">
                    <h3 className="modalTitle">클립 추가</h3>
                    <input className="modalInput" placeholder="URL" onChange={(a) => {setInputKey(a)}}></input>
                    <br/>
                    <div className="modalButtons">
                        <button className="modalCloseButton" onClick={onOffModal}>닫기</button>
                        <button className="modalPlusButton" onClick={(a)=>{
                            debugger;
                            axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${a}&key=${apiKey}`)
                            .then(response => {

                            })
                            .catch(error => {

                            })
                        }}>추가</button>
                    </div>
                </div>
            
        </div>
    )
}

export default AddClipModal;