import { List } from "./FriendList.styled"

export const FriendList = ({friends}) => {
    return (
        <List>
        {friends.map(friend => {
            return (<li key={friend.id} className="item">
            <span className={friend.isOnline ? "offline" : "online"}></span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>)
        })}
      </List>
    )
}