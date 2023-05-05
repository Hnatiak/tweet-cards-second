import { MsgWrapper } from "./ErrorMsg.styled";

export const ErrorMsg = () => (
  <MsgWrapper>
    <p>Sorry, an error occurred while loading the data.</p>
    <p>Please try again later or refresh the page.</p>
  </MsgWrapper>
);