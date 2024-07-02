import React, { useEffect, useState } from "react";

const GithubProfileFinder = () => {
  const [username, setUserName] = useState("");
  const [userData, setUserData] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [laoding, setLoading] = useState(false);

  const fetchApiGithub = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(data);
      setUserData(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
      setErrMsg(err.message);
    }
  };
  const handleSubmit = () => {
    if (username.trim() !== "") {
      fetchApiGithub();
      setUserName("");
    } else {
      alert("Please enter username....");
    }
    // setUserName("");
  };
  useEffect(() => {
    fetchApiGithub();
  }, []);
  if (laoding) {
    return <div>Loading please wait....</div>;
  }
  if (errMsg) {
    return (
      <div>
        <h1>
          Error occured: <span>{errMsg}</span>
        </h1>
      </div>
    );
  }
  const createdDate = new Date(userData.created_at);
  return (
    <div className="min-h-screen px-4">
      <div className="flex flex-col max-w-[800px] items-center  justify-start mx-auto min-h-screen  pt-6 ">
        <h1 className="font-bold text-xl py-2">Github Profile Finder</h1>

        <div className="flex sm:flex-row flex-col  justify-center w-[100%] sm:w-full  py-6">
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="p-2 outline-none border-2 font-bold border-blue-700 sm:w-[40%]"
            placeholder="Search Github Username..."
            type="text"
            value={username}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white p-2 "
          >
            Search
          </button>
        </div>
        {userData.login !== "" ? (
          <div className=" mx-auto w-full mt-4 border-2 ">
            <div className="flex sm:flex-row flex-col items-center gap-5 justify-center p-4 ">
              <div className="">
                <img
                  className="w-[260px] rounded-full"
                  src={userData.avatar_url}
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="font-bold text-xl">{userData.name}</h1>
                <a
                  href={`https://github.com/${userData.login}`}
                  target="_blank"
                >
                  <b>Username: </b> {userData.login}
                </a>

                <p>
                  <b>
                    {userData.public_repos > 1
                      ? "Public Repositories: "
                      : "Public Repository: "}
                  </b>
                  {userData.public_repos}
                </p>
                <h1>
                  <b>User joined on:</b>{" "}
                  {`${createdDate.getDate()}  ${createdDate.toLocaleString(
                    "en-us",
                    { month: "short" }
                  )} ${createdDate.getFullYear()}`}{" "}
                </h1>
                <h1>
                  <b>{userData.followers > 1 ? "Followers: " : "Follower: "}</b>
                  {userData.followers}
                </h1>
                <h1>
                  <b>
                    {userData.following > 1 ? "Followings: " : "Following: "}
                  </b>
                  {userData.following}
                </h1>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GithubProfileFinder;
