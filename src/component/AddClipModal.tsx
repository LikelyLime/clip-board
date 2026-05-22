import React from "react";

interface OwnProps{
    onOffModal: () => void
}

function AddClipModal({onOffModal}: OwnProps){
    
    return(
        <div className="Overlay">
            
                <div className="Modal">
                    <h3 className="modalTitle">클립 추가</h3>
                    <input className="modalInput" placeholder="URL"></input>
                    <br/>
                    <div className="modalButtons">
                        <button className="modalCloseButton" onClick={onOffModal}>닫기</button>
                        <button className="modalPlusButton">추가</button>
                    </div>
                </div>
            
        </div>
    )
}

export default AddClipModal;