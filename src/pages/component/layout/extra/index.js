import React, { useContext } from "react";

import Tag from "../../tag/tag";
import { Spinner } from "../../icons";

import styles from "./extra.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { publicFetch } from "../../../../utils/fetcher";

const PopularTags = ({ marginTop = 24 }) => {
  // const { tagState } = useContext(TagContext);
  const [tagState, setTagState] = useState({ isloading: true });
  useEffect(() => {
    const fetchPopularTags = async () => {
      const { data } = await publicFetch.get("/tags/populertags");
      setTagState({ isloading: false, data: data });
    };

    fetchPopularTags();
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.tagContainer}
        style={{ marginTop: `${marginTop}px` }}
      >
        <h2>Popular Tags</h2>
        {tagState.isloading && (
          <div className="loading">
            <Spinner />
          </div>
        )}
        {!tagState.isloading && (
          <div className={styles.popularTags}>
            {tagState.data?.map((tag) => (
              <Tag key={tag._id} count={tag.count}>
                {tag._id}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularTags;
