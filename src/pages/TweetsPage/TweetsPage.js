import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/api/usersApi";
import { MdOutlineArrowBackIosNew } from "react-icons/md"; //1234565432123456
import useWindowDimensions from "../../services/hooks/useWindowDimensions";
import { smoothlyScroll } from "../../services/utils/smoothlyScroll";
import TweetCard from "../../components/TweetCard/TweetCard";
import LoadMore from "../../components/LoadMore/LoadMore";
import Filter from "../../components/Filter/Filter";
import { Loader } from "../../components/Loader/Loader";
import { ErrorMsg } from "../../components/ErrorMsg/ErrorMsg";
import { HiddenTitle, Link, List, Section } from "./TweetsPage.styled";

import { Helmet } from "react-helmet";


function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { width } = useWindowDimensions();

  const cardsPerPage = (width >= 904 && width < 1332) || width >= 1760 ? 4 : 3;

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchUsers();
        setUsers(data);
        setVisibleUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(Date.now(), isLoading);
  }, [isLoading]);

  useEffect(() => {
    smoothlyScroll();
  }, [page]);

  const onLoadMoreClick = () => {
    setPage((state) => state + 1);
  };

  const filtration = (e) => {
    switch (e.target.value) {
      case "all":
        setVisibleUsers(users);
        break;

      case "follow":
        setVisibleUsers(
          users.filter(
            (user) => !JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
          )
        );
        break;

      case "following":
        setVisibleUsers(
          users.filter((user) =>
            JSON.parse(localStorage.getItem(`isFollowing${user.id}`))
          )
        );
        break;

      default:
        console.error("invalid value");
        break;
    }
  };

  return (
    <Section>
      <Helmet>
        <title>Tweets</title>
      </Helmet>
      <HiddenTitle>Tweets Page</HiddenTitle>
      <Link to="/">
        <MdOutlineArrowBackIosNew />
      </Link>
      <Filter filterHandler={filtration} />

      {isLoading && <Loader />}
      {error && <ErrorMsg />}

      <List>
        {visibleUsers.length > 0 &&
          visibleUsers.slice(0, page * cardsPerPage).map((user) => (
            <li key={user.id}>
              <TweetCard user={user} />
            </li>
          ))}
      </List>
      {page * cardsPerPage < visibleUsers.length && (
        <LoadMore clickHandler={onLoadMoreClick} />
      )}
    </Section>
  );
}

export default TweetsPage;