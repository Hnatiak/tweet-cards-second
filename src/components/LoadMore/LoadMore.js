import { Button } from "./LoadMore.styled";

function LoadMore({ clickHandler }) {
  return (
    <Button type="button" onClick={clickHandler}>
      Load More
    </Button>
  );
}

export default LoadMore;