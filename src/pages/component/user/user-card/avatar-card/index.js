import React, { useEffect, useState } from "react";
import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

import { Spinner } from "../../../icons";

import styles from "./avatar-card.module.css";
import { publicFetch } from "../../../../../utils/fetcher";

const UserAvatar = ({ userid }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await publicFetch.get(`/user/${userid}`);
      setUserInfo(data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <div className={styles.avatarCard}>
        {!userInfo ? (
          <div className="loading">
            <Spinner />
          </div>
        ) : (
          <div className={styles.avatar}>
            <a>
              <img
                src={`https://secure.gravatar.com/avatar/${userid}?s=164&d=identicon`}
                alt={userInfo?.username}
              />
            </a>
          </div>
        )}
        <h2 className={styles.username}>{userInfo?.username}</h2>
        {!userInfo ? (
          <div className="loading">
            <Spinner />
          </div>
        ) : (
          <div className={styles.created}>
            <p>
              Created:{" "}
              <span>
                {formatDistanceToNowStrict(new Date(userInfo?.created), {
                  addSuffix: true,
                })}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAvatar;
