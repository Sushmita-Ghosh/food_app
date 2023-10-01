// This is a custom hook for showing the status of user's connectivity
// such that we can build "You are Offline Page"

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // we are assuming user is online
  const [onlineStatus, setOnlineStatus] = useState(true);
  //   we just need to check if the user is online or not
  //  for this we need to add the event listener online - we need to do it once as it will keep track when the user
  //  is online or offline
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  // return a boolean - for the same
  return onlineStatus;
};

export default useOnlineStatus;
