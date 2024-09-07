import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img src={avatar} alt={`${name}'s avatar`} width="48" />
  <p>{name}</p>
  <p className={clsx (isOnline ? s.isOnline : s.isOffline)}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}

export default FriendListItem;
