import styles from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
      <div className={styles.friendCard}>
        <img className={styles.friendImg}src={avatar} alt={`${name} avatar`} width="64" />
        <p className={styles.friendName}>{name}</p>
        <p className={`${styles.isOnline} ${isOnline ? styles.online : styles.offline}`}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    )
  };

export default FriendListItem;

