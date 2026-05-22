import React from "react";
import { Clip } from "../type";


interface OwnProps{
    clip: Clip
}
function ClipCard({clip}: OwnProps){

    return(
        <div className="Card">
            <div className="thumbnail">
                <img src="" alt="썸네일" />
                <span className="statusBadge">미편집</span>
                <span className="ratingBadge">★★★</span>
            </div>
            <div className="title">제목</div>
            <div className="channelName">채널명</div>
            <div className="tags">태그</div>
            <div className="memo">메모</div>
            <div className="cardButton">
                <button>수정</button>
                <button>▶</button>
                <button>X</button>
            </div>
        </div>
    )
}

export default ClipCard;