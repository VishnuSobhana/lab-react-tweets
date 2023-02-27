import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import User from "./User";
import Message from "./Message";
import Action from "./Action";
function Tweet(props) {
  console.log("the props", props);
  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />
      <div className="body">
        <div className="top">
          <span className="user">
            <User
              name={props.tweet.user.name}
              handle={props.tweet.user.handle}
            />
          </span>
          <Timestamp timeStamp={props.tweet.timestamp} />
        </div>

        <Message message={props.tweet.message} />

        <Action />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
