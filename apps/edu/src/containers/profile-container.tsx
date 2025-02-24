import Profile from "../components/profile";
import { useUserStore } from "../store";

const ProfileContainer = () => {
  const user = useUserStore((state) => state.user);

  return <Profile user={user} />;
};

export default ProfileContainer;
