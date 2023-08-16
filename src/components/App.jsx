import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import data from '../json/data.json';
import friends from '../json/friends.json';
import user from '../json/user.json';
import transactions from '../json/transactions.json';

export const App = () => {
  return (
    <>
      <div class="profile-cont">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />

        <Statistics title="Stats" stats={data} />

        <FriendList friends={friends} />
      </div>
      <TransactionHistory items={transactions} />
    </>
  );
};
