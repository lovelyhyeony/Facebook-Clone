import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <div className="header_input">
          <SearchIcon />
          <input placeholder="Serach" type="text" />
        </div>
      </div>

      <div className="header_center">
        <div
          className="header_option
        header_option--active"
        >
          <HomeIcon fontSize="large" />
        </div>
        <div className="header_option">
          <EmojiPeopleIcon fontSize="large" />
        </div>
        <div className="header_option">
          <VideoLibraryIcon fontSize="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
        <div className="header_option">
          <VideogameAssetIcon fontSize="large" />
        </div>
      </div>

      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoURL} />
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
