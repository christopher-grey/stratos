import React, {useState, useCallback} from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ReplyIcon from '@mui/icons-material/Reply';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';



function UniquePost(props) {
    const [likeCount, setLikeCount] = useState(0)
    const [commentCount, setCommentCount] = useState(0)
    const [shareCount, setShareCount] = useState(0)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    function onClickLike() {
      setLikeCount(likeCount + 1)
      console.log("CURRENT COUNT", likeCount)
      setOpen(true)
      console.log("OPEN", open)
      return <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>

        </Modal>

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
          <IconButton className={"MyCustomButton"} onClick={onClickLike}>
          <ThumbUpAltIcon id="thumbsUpIcon" />
          <div id="likeCount">{likeCount == 0 ? null: likeCount}</div>
          </IconButton>
          </div>
          <div id="comments">
          <IconButton className={"MyCustomButton"} onClick={onClickComment}>
          <ChatIcon id="commentsIcon"/>
          <div id="commentCount">{commentCount == 0 ? null: commentCount}</div>
          </IconButton>
          </div>
          <div id="share">
          <IconButton className={"MyCustomButton"} onClick={onClickShare}>
          <ReplyIcon id="shareIcon"/>
          <div id="shareCount">{shareCount == 0 ? null: shareCount}</div>
          </IconButton>
          </div>
          </div>
        </div>
    )
}

export default UniquePost;