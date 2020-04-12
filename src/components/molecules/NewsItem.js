import { useState, useEffect } from "react";
import { getLocation, getHoursPassed } from "../../utils";
import {
  setItemAsHidden,
  isItemHidden,
  getUpvotes,
  upvoteItem,
} from "../../NewsService";

export default ({ item }) => {
  const [isHidden, setHidden] = useState(isItemHidden(item.objectID));
  if (isHidden) {
    return null;
  }

  const [upvotes, setUpvotes] = useState(0);

  useEffect(() => {
    const getUpvotesFunc = async () => {
      const upvotes = await getUpvotes(item.objectID);
      setUpvotes(upvotes);
    };
    getUpvotesFunc();
  }, []);

  return (
    <li className="flex align-center pl2">
      <div className="mr2 comments">{item.num_comments || 0}</div>
      <div className="mr1 upvotes">{upvotes || 0}</div>
      <div
        className="p1 mr2"
        onClick={() => {
          upvoteItem(item.objectID, upvotes + 1);
          setUpvotes(upvotes + 1);
        }}
      >
        <div className="upvoteIcon"></div>
      </div>

      <div className="flex details">
        <div className="fs-lg mr1">
          {item.title}{" "}
          <a className="fs-sm light-color" target="_blank" href={item.url}>
            ({getLocation(item.url).hostname})
          </a>{" "}
        </div>
        <div className="mr1">
          <span className="light-color">by</span> {item.author}
        </div>
        <div className="light-color mr1 fs-sm">
          {getHoursPassed(item.created_at)} hours ago
        </div>
        <div
          className="hide-item"
          onClick={() => {
            setItemAsHidden(item.objectID);
            setHidden(true);
          }}
        >
          [<span>hide</span>]
        </div>
      </div>
      <style jsx>{`
        .comments,
        .upvotes {
          min-width: 40px;
        }

        .upvoteIcon {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 8px solid #888;
          cursor: pointer;
        }
        .light-color {
          color: #333;
        }

        li {
          background: #eee;
          line-height: 40px;
        }
        li:nth-child(2n) {
          background: #ddd;
        }

        .details {
          flex-wrap: wrap;
        }

        .hide-item {
          cursor: pointer;
        }
      `}</style>
    </li>
  );
};
