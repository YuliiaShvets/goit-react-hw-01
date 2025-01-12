import styles from "./Friendlist.module.css"
import FriendListItem from "../friendListItem/FriendListItem"

const FriendList = ({friends}) => {
  return (
      <div className={styles.friendSection}>
      <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline }) => (
         <> 
<li className={styles.friendItem}>
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
</li>

  </>
  ))}
    </ul>
    </div>
  )
}

export default FriendList;



