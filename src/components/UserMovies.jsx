import React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./UserMovies.scss";

//Axios Call to API to get user's movies and render to-watch and watched lists

export default function UserMovies() {
  useEffect(() => {
    axios.get("http://localhost:8080/api/movies").then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <div>
      <h1>sup</h1>
      <table>
        <th>Hi</th>
      </table>
    </div>
  );
}
