import styles from "./Profile.module.css"

const Profile = ({name, tag, location, image, stats}) => {
  return (
<div className={styles.profileSection}>
   <div className={styles.profile}>
    <img className={styles.profileImage}
      src={image}
      alt="User avatar"
    />
    <p className={styles.profileUsername}>{name}</p>
    <p className={styles.profileTag}>@{tag}</p>
    <p className={styles.profileLocation}>{location}</p>
  </div>

  <ul className={styles.profileStats}>
    <li className={styles.card}>
      <span className={styles.cardName}>Followers</span>
      <span className={styles.cardStats}>{stats.followers}</span>
    </li>
    <li className={styles.card}>
      <span className={styles.cardName}>Views</span>
      <span className={styles.cardStats}>{stats.views}</span>
    </li>
    <li className={styles.card}>
      <span className={styles.cardName}>Likes</span>
      <span className={styles.cardStats}>{stats.likes}</span>
    </li>
 </ul>
</div>
)
}

export default Profile;


