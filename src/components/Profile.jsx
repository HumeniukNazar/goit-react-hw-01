import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) =>
{
    return (
        <div className={s.card}>
 <div>
  <img
  
 src={image}
                    alt="User avatar"
                    className={s.image}
 />
 <p className={s.name}>{name}</p>
 <p className={s.tag}>@{tag}</p>
 <p>{location}</p>
 </div>

 <ul className={s.statsList}>
  <li className={s.listItem}>
   <span>Followers</span>
   <span>{stats.followers}</span>
  </li>
  <li className={s.listItem}>
   <span>Views</span>
   <span>{stats.views}</span>
  </li>
  <li className={s.listItem}>
   <span>Likes</span>
   <span>{stats.likes}</span>
  </li>
 </ul>
</div>

    )
}
export default Profile;