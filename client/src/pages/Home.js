import React from "react";
import { useQuery } from "@apollo/client";

// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <h3>Welcome to custom made leather patches</h3>
          <p>
            Using only the best, top grain leather and made on our brand new XTool D1
            Pro machine we can make just about anything you can dream. We mainly
            stay with leather but we can also etch may other mediums such as
            wood and can mark metal. If you can dream up an idea then we will do
            our best to make that dream come true. Limited to a workspace of
            32in x 32in
          </p>
        </div>
        <div className="col-12 col-md-8 mb-3"></div>
      </div>
    </main>
  );
};

export default Home;
