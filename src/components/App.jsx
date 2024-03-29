import Profile from './profile/profile.js';
import user from './user.json';
import Statistics from './statistics/statistics.js';
import data from './data.json';
import FriendList from './friendList/friendList.js';
import friends from './friends.json';
import Transaction from './transaction/transaction.js';
import transaction from './transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transaction items={transaction} />
    </>
  );
};
