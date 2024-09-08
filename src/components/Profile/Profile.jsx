import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) =>
{
    return (
        <div className={s.card}>
 <div className={s.wrapper}>
  <img
  
 src={image}
                    alt="User avatar"
                    className={s.image}
 />
 <p className={s.name}>{name}</p>
 <p className={s.tag}>@{tag}</p>
 <p className={s.city}>{location}</p>
 </div>

 <ul className={s.statsList}>
  <li className={s.listItem}>
   <span className={s.statName}>Followers</span>
   <span className={s.statQuant}>{stats.followers}</span>
  </li>
  <li className={s.listItem}>
   <span className={s.statName}>Views</span>
   <span className={s.statQuant}>{stats.views}</span>
  </li>
  <li className={s.listItem}>
   <span className={s.statName}>Likes</span>
   <span className={s.statQuant}>{stats.likes}</span>
  </li>
 </ul>
</div>

    )
}
export default Profile;