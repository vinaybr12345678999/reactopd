import React from 'react';

function UserCard({ username }) {
  return (
    <p>
      <strong>Logged in: {username}</strong>
    </p>
  );
}

function Page({ username }) {
  return <UserCard username={username} />;
}

function Layout({ username }) {
  return <Page username={username} />;
}

const PropsDrilling = () => {
  const username = "vinay";

  return (
    <div>
      <h1>Props Drilling Example</h1>
      <Layout username={username} />
    </div>
  );
};

export default PropsDrilling;