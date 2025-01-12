import styles from "./Friendlist.module.css"
import FriendListItem from "../friendListItem/FriendListItem"

const FriendList = ({friends}) => {
  return (
      <div className={styles.friendSection}>
      <ul className={styles.friendList}>
      {friends.map(friend => {
        return (
       <li key={friend.id} className={styles.friendItem}>
      <FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} />
</li>
  );
})}
    </ul>
    </div>
  )
}

export default FriendList;
