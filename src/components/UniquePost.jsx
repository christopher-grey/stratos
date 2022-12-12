import React, {useState, useCallback} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ReplyIcon from '@mui/icons-material/Reply';


function UniquePost(props) {
    const [likeCount, setLikeCount] = useState(0)
    const [commentCount, setCommentCount] = useState(0)
    const [shareCount, setShareCount] = useState(0)
    function onClickLike() {
      setLikeCount(likeCount + 1)
      console.log("CURRENT COUNT", likeCount)

    }
    function onClickComment() {
      setCommentCount(commentCount + 1)
      console.log("CURRENT COUNT", commentCount)

    }
    function onClickShare() {
      setShareCount(shareCount + 1)
      console.log("CURRENT COUNT", shareCount)

    }
    return (
        <div id="post">
          <div id="nameOnPost">
            {/* Jonathan */}
            <div id="posterName">
            {props.name}
            </div>
            <div id="more_details">
            <MoreVertIcon/>
            </div>
          </div>
          <div id="dateOnPost">
            {/* 2 Jan 2022 */}
            {props.date}
          </div>
          <div id="promptOnPost">
            {/* A win in my career..... */}
            {props.prompt}
          </div>
          <div id="promptMessage">
          {/* I was recenly promoted to senior manager at my company. I put in the work and it is paying off.  */}
            {props.promptMessage}
          </div>
          <hr id="promptHL"/>
          <div id="postIcons">
          <div id="thumbsUp">
          <Button onClick={onClickLike}>
          <ThumbUpAltIcon id="thumbsUpIcon" />
          <div id="likeCount">{likeCount == 0 ? null: likeCount}</div>
          </Button>
          </div>
          <div id="comments">
          <Button onClick={onClickComment}>
          <ChatIcon id="commentsIcon"/>
          <div id="commentCount">{commentCount == 0 ? null: commentCount}</div>
          </Button>
          </div>
          <div id="share">
          <Button onClick={onClickShare}>
          <ReplyIcon id="shareIcon"/>
          <div id="shareCount">{shareCount == 0 ? null: shareCount}</div>
          </Button>
          </div>
          </div>
        </div>
    )
}

export default UniquePost;