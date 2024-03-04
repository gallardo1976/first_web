"use client";
import { useRouter } from "next/navigation";
//import Image from "next/image";

function User({ users }) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          key={user.id}
          className="list-group-item d-flex justify-content-between aling-item-center list-group-item-action "
          onClick={() => {
            router.push(`/user/${user.id}`);
          }}
        >
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt="useavatar"
            style={{ borderRadius: "50%" }}
          />
        </li>
      ))}
    </ul>
  );
}

export default User;
