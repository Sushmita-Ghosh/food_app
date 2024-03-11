import { useEffect, useState } from "react";
// import { backend_url } from "../../server.js";
import { backend_url } from "../../constant.js";

const User = ({ name, avatar, email }) => {
  const [userInfo, setUserInfo] = useState({});

  const fetchData = async () => {
    const data = await fetch(`https://api.github.com/users/${name}`);
    const json = await data.json();
    setUserInfo(json);
  };

  //   making an api call to the github user api
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sm:flex items-center justify-center max-w-screen-xl flex-wrap w-[80%] mx-auto mt-10 rounded text-center">
      <div className="">
        <div className="w-72 mx-auto  object-center text-center">
          <img className="rounded-full" src={`${backend_url}${avatar}`} />
        </div>
        <div className="py-4">
          <h1 className="text-3xl font-bold">👋 Hello, {name}</h1>
          <p className="mt-4">
            Email: <span className="font-bold">{email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
