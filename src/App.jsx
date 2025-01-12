
import Profile from "./components/profile/Profile.jsx";
import FriendList from "./components/friendLIst/FriendList.jsx";
import TransactionHistory from "./components/transactionHistory/TransactionHistory.jsx";
import userData from "./userData.json";
import friends from "./friends.json"; 
import transactions from "./transactions.json";


const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
