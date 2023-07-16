import { Component } from "react";
import Postbar from "./Postbar";
const postData = [
  {
    title: "PHP Developer Required",
    description: "For a client project PHP Developer is required",
    location: "Kathmandu",
    job_type: "Full Time",
    pay_rate_per_hr_dollar: 10.0,
    skills: ["PHP", "JS", "HTML"],
    liked_by: ["test111", "test1", "test123"],
    viewed_by: ["test111", "test1", "test123"],
    id: 2,
    user_id: 1,
    post_by_username: "test123",
    post_by_fullname: "Test User",
    post_date: "2023-06-10T09:24:07.659034",
    comments: [],
  },
  {
    title: "PHP Developer Required",
    description: "For a client project PHP Developer is required",
    location: "Kathmandu",
    job_type: "Full Time",
    pay_rate_per_hr_dollar: 10.0,
    skills: ["PHP", "JS", "HTML"],
    liked_by: ["test111", "test1", "test123"],
    viewed_by: ["test111", "test1", "test123"],
    id: 3,
    user_id: 2,
    post_by_username: "test321",
    post_by_fullname: "Test User2",
    post_date: "2023-06-10T21:51:10.643105",
    comments: [],
  },
  {
    title: "PHP Developer Required",
    description: "For a client project PHP Developer is required",
    location: "Kathmandu",
    job_type: "Full Time",
    pay_rate_per_hr_dollar: 10.0,
    skills: ["PHP", "JS", "HTML"],
    liked_by: ["test111", "test1", "test123"],
    viewed_by: ["test111", "test1", "test123"],
    id: 4,
    user_id: 3,
    post_by_username: "test111",
    post_by_fullname: "Test User2",
    post_date: "2023-06-10T21:53:40.698655",
    comments: [],
  },
];
class PostList extends Component {
  render() {
    return (
      <div className="posts-section">
        {postData.map((post, pi) => (
          <Postbar post={post} key={pi} />
        ))}
      </div>
    );
  }
}

export default PostList;
