import { useEffect, useState } from "react";

const User = ({ name }) => {
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
    <div className="sm:flex items-center max-w-screen-xl flex-wrap w-[80%] mx-auto mt-10 rounded">
      <div className="sm:w-1/2 p-12">
        <div className="w-72 mx-auto  object-center text-center">
          <img
            className="rounded-full"
            src={userInfo.avatar_url}
            alt={userInfo.name}
          />
        </div>
      </div>

      <div className="sm:w-1/2 p-10">
        <h1 className="text-3xl font-bold">👋 Hello, I'm Sushmita!</h1>
        <p className="mt-4">
          I'm a passionate Frontend Developer based out of the beautiful land of
          Canada. My journey in the world of web development has been an
          exciting adventure, and I'm here to share my experiences and
          contribute to innovative projects.
        </p>

        <p className="mt-4">
          Feel free to explore my portfolio:&nbsp;
          <a
            className="text-green-500 hover:underline"
            href="https://sushmita-portfolio.vercel.app/"
          >
            Sushmita's Portfolio.
          </a>
          It's a showcase of my work and a reflection of the creativity and
          dedication I bring to each project. Let's connect, collaborate, and
          create something amazing together! 🚀✨
        </p>
        {/* <div>
          <p>📧 Email: {userInfo.email}</p>
          <p>🌐 Location: {userInfo.location}</p>
          <p>👨‍💼 Company: {userInfo.company}</p>
          <p>🔗 Link: {userInfo.html_url}</p>
          <p>🗄 Repos: {userInfo.public_repos}</p>
          <p>📅 Joined: {userInfo.created_at}</p>
        </div> */}
      </div>
    </div>
  );
};

export default User;
