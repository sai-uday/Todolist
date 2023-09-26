import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to TodoList</h1>
      <p className="lead">
        Manage your tasks efficiently with TodoList! Keep track of your daily tasks, set priorities, and stay organized.
      </p>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Stay Organized</h3>
              <p className="card-text">Easily organize your tasks and never miss an important deadline.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Prioritize Tasks</h3>
              <p className="card-text">Set priorities and focus on what matters most in your day.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h3 className="card-title">Accessible Anywhere</h3>
              <p className="card-text">Access your tasks from anywhere with our online platform.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Why Choose TodoList?</h2>
          <p>
            TodoList is the perfect tool to help you stay organized and boost productivity. With features like task
            prioritization, and seamless synchronization across devices, you'll wonder how you ever
            managed without it.
          </p>
        </div>
      </div>
      <p>
        Ready to get started? <Link to="/signup" className="btn btn-primary">Sign up now</Link>
      </p>
    </div>
  );
}

export default HomePage;
