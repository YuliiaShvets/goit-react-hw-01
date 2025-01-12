import styles from "./Friendlist.module.css"

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

const FriendListItem = ({ id,avatar, name, isOnline }) => {
    return (
      <div key={id} className={styles.friendCard}>
        <img className={styles.friendImg}src={avatar} alt={`${name} avatar`} width="64" />
        <p className={styles.friendName}>{name}</p>
        <p className={`${styles.isOnline} ${isOnline ? styles.online : styles.offline}`}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    )
  };

export default FriendList;