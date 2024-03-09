import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { server } from "../../server";
import axios from "axios";

const Activation = () => {
  const { token } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/user/activate`, {
            token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            setError(true);
            console.log(err);
          });
      };
      sendRequest();
    }
  }, [token]);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {error ? (
        <p className="text-red-500">Your token is invalid</p>
      ) : (
        <p className="text-green-500">Your account has been activated</p>
      )}
    </div>
  );
};

export default Activation;
