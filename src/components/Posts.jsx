import React, { useState, useEffect } from "react";
// import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/TableAction";
import Header from "./Header";
import Paginate from "./Paginate";
import PostCard from "./PostCard";

const Posts = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.TableReducers);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangeSearch = (e) => {
    if (e.target.value.length > 0) {
      setCurrentPage(1);
    }
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  console.log("posts", posts);
  const postPerPage = 10;
  const totalPosts = posts.length;

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const filterPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        onChange={handleChangeSearch}
      />

      <div className="container">
        <div className="posts">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">name</th>
                <th scope="col">Tag Line</th>
                <th scope="col">SRM</th>
              </tr>
            </thead>
            <tbody>
              {filterPosts.map((post) => {
                return (
                  <tr>
                    <th scope="row">{post.id}</th>
                    <td>{post.name}</td>
                    <td>{post.tagline}</td>
                    <td>@{post.srm}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {totalPosts > postPerPage && (
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPosts={totalPosts}
            postPerPage={postPerPage}
          />
        )}
      </div>
    </>
  );
};

export default Posts;
