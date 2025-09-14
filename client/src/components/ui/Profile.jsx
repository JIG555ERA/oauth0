import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <div className="hidden">Loading ...</div>;

  return (
    isAuthenticated && (
      <div>
        <img
        className="w-[50px] h-[50px] rounded-full " 
        src={user.picture} 
        alt={user.name} />
        {/* <h2>{user.name}</h2>
        <p>{user.email}</p>
        <pre>{JSON.stringify(user, null, 2)}</pre> */}
      </div>
    )
  );
}

export default Profile;
