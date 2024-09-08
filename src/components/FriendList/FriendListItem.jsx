import clsx from "clsx";
import s from './FriendListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img className={s.img} src={avatar} alt={`${name}'s avatar`} width="48" />
  <p className={s.name}>{name}</p>
  <p className={clsx (isOnline ? s.isOnline : s.isOffline)}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}

export default FriendListItem;
