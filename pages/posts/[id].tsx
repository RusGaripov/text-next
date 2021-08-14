import Link from "next/link";
import React from "react";
import axios from "axios";
import { useState } from "react";

Post.getInitialProps = (props: any) => {
  return props;
};

export default function Post(props: any) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

 

  if (props.query && props.query.id === "new")
    return (
      <>
        <h3 style={{ marginLeft: "20px" }}>Create new post</h3>
        <form method="post" style={{ marginLeft: "20px" }}>
          <div>
            <input
              style={{ marginBottom: "20px", width: "500px" }}
              type="text"
              id="mail"
              name="user_mail"
              onChange={(e: any) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div>
            <textarea
              id="msg"
              name="user_message"
              style={{ marginBottom: "20px", width: "500px", height: "200px" }}
              onChange={(e: any) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={(e:any) => {
              e.preventDefault()
              axios.post("https://simple-blog-api.crew.red/posts", {
                title: title,
                body: body,
              });
            }}
          >
            Add Post
          </button>
        </form>
      </>
    );
  if (props.query)
    return (
      <div style={{ marginLeft: "20px" }}>
        <h2>
          <Link href="/">
            <a>Back </a>
          </Link>
        </h2>
        <h3 style={{ marginTop: "50px" }}>{props.query.title}</h3>
        <div>{props.query.body}</div>
      </div>
    );
  return null;
}
