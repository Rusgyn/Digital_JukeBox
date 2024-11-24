import { useLoginData } from "../hooks/useLoginData";

function AddAdmin() {
  const {
    adminLoginUsername,
    adminLoginPassword,
    adminHandleUser,
    adminHandlePass,
    handleSubmit,
  } = useLoginData();
  console.log("Add Admin component is rendering");
  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="admin_username">Admin Username</label>
        <input
          className="admin_username"
          type="text"
          placeholder="Type here..."
          value={adminLoginUsername}
          onChange={adminHandleUser}
        />
        <label htmlFor="admin_password">Admin Password</label>
        <input
          className="admin_password"
          type="password"
          placeholder="Type here..."
          value={adminLoginPassword}
          onChange={adminHandlePass}
        />
        <button type="submit" className="login-button">
          Add Admin
        </button>
      </form>
    </div>
  );
}

export default AddAdmin;