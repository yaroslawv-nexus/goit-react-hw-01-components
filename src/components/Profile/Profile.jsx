import {StatList, Container} from './Profile.styled';


export const Profile = (props) => {
    return (
        <Container>
        <div className="description">
          <img
            src={props.avatar}
            alt={props.username}
            className="avatar"
          />
          <p className="name">{props.username}</p>
          <p className="tag">@{props.tag}</p>
          <p className="location">{props.location}</p>
        </div>
      
        <StatList>
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{props.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{props.stats.views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{props.stats.likes}</span>
          </li>
        </StatList>
      </Container>
    );
  };

