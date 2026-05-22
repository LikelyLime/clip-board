import React, { useState } from "react"
import AddClipModal from "./AddClipModal";
function Header(){
    const [addModal, setAddModal] = useState<boolean>(false);

    function onOffModal(){
        setAddModal(!addModal)
    }

    return(
        <div className='header'>
            <div className='headerLeft'>
                <h3 className='portalName'>✅ ClipBoard</h3>
                <div className='subTitle'>버튜버 클립 큐레이션</div>
            </div>
            <button className='plusButton' onClick={ onOffModal }>+ 클립 추가</button>
            {addModal && <AddClipModal onOffModal={onOffModal}/>}
        </div>
    )
}

export default Header;