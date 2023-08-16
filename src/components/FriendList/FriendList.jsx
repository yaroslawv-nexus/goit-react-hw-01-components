import { List } from './FriendList.styled';
import { FriendItem } from '../FriendItem/FriendItem';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return <FriendItem friend={friend} key={friend.id} />;
      })}
    </List>
  );
};
