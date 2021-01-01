import React from "react";
import Story from "./Story/Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyreel">
      <Story
        image="https://i.pinimg.com/564x/36/f0/80/36f080a58e46ae30fa1bda8b327dafcf.jpg"
        profilePic="https://i.pinimg.com/564x/17/e4/d4/17e4d4cb603bf6df28ddc0ca899d5b6a.jpg"
        title="universe"
      />
      <Story
        image="https://i.pinimg.com/564x/b4/77/d9/b477d956d8275761f8f13678eacac95d.jpg"
        profileSrc="https://i.pinimg.com/564x/74/d1/ab/74d1abe2529cc6fb6d93c6c919dd13a7.jpg"
        title="lovelyhyeony"
      />
      <Story
        image="https://i.pinimg.com/564x/18/5d/dc/185ddc2e6d1fd11b4acb5708ae6a2b1b.jpg"
        profileSrc="https://i.pinimg.com/564x/04/8a/2e/048a2e972afd8e3f1bc0b939a1f95aa2.jpg"
        title="cookies"
      />
      <Story
        image="https://i.pinimg.com/564x/b5/de/a8/b5dea8833584efb5b4d90c8bb5570f36.jpg"
        profileSrc="https://i.pinimg.com/564x/c4/ce/69/c4ce69fbd8f790b25b28ac05d3cbf6e8.jpg"
        title="Annastasia"
      />
    </div>
  );
}

export default StoryReel;
