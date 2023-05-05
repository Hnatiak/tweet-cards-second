import { useEffect, useState } from "react";
import {
  Button,
  CardWrapper,
  FrameBgImg,
  FrameImg,
  Img,
  InfoCount,
  InfoText,
  InfoWrapper,
  Logo,
  PictureImg,
  StripImg,
} from "./TweetCard.styled";

function TweetCard({ user }) {
  const { id, avatar, tweets, followers } = user;
  const [isFollowing, setIsFollowing] = useState(false);
  const [addition, setAddition] = useState(0);
  const [btnCaption, setBtnCaption] = useState("Follow");
  const [btnColor, setBtnColor] = useState("#EBD8FF");

  useEffect(() => {
    setIsFollowing(JSON.parse(localStorage.getItem(`isFollowing${id}`)));
  }, [id]);

  useEffect(() => {
    if (isFollowing) {
      setAddition(1);
      setBtnCaption("Following");
      setBtnColor("#5CD3A8");
    } else {
      setAddition(0);
      setBtnCaption("Follow");
      setBtnColor("#EBD8FF");
    }
  }, [isFollowing]);

  const stateToggle = () => {
    localStorage.setItem(`isFollowing${id}`, JSON.stringify(!isFollowing));
    setIsFollowing((state) => !state);
  };

  return (
    <CardWrapper>
      <Logo />
      <PictureImg />
      <StripImg />
      <FrameBgImg />
      <Img src={avatar} alt="avatar" width={70} height={70} loading="lazy" />
      <FrameImg />
      <InfoWrapper>
        <InfoText>
          <InfoCount>{tweets}</InfoCount>tweets
        </InfoText>
        <InfoText>
          <InfoCount>
            {(followers + addition).toLocaleString("en-US")}
          </InfoCount>
          followers
        </InfoText>
      </InfoWrapper>
      <Button type="button" onClick={stateToggle} color={btnColor}>
        {btnCaption}
      </Button>
    </CardWrapper>
  );
}

export default TweetCard;