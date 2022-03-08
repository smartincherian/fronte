import logo from './logo.svg';
import './App.css';
import Admin from './components/admin/Admin';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/trainers/Search';
import Approved from './components/trainers/Allocate';
import Course_batch from './components/course_batch/Course_batch';
import Pendinglist from './components/trainers/Pendinglist';
import PendingTrainer from './components/trainers/PendingTrainer';
import Allocate from './components/trainers/Allocate';
import Schedule from './components/trainers/Schedule';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/pending" element={<Pendinglist />} />
      <Route path="/pending/:_id" element={<PendingTrainer />} />
      <Route path="/search" element={<Search />} />
      <Route path="/approved" element={<Approved />} />
      <Route path="/allocate/:id" element={<Allocate />} />
      <Route path="/calendar" element={<Schedule />} />
      <Route path="/course_batch" element={<Course_batch />} />
      </Routes>
    </div>
    </Router>
    );
}

export default App;
