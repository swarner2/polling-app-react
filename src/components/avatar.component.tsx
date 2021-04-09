import { UserModel } from "../models/user.model";


function Avatar(props: {user: UserModel}) {
  return (
    <img className="Avatar"
    //   src={props.user.avatarURL}
    //   alt={props.user.name}
    />
  );
}

  export default Avatar