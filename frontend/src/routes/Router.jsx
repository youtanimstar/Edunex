import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Course from "../pages/Course/Course";
import CourseSection from "../pages/Course/CourseSection";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/course" element={<Course />} />
      <Route path="/course/section" element={<CourseSection/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Route>
  )
);

export default router;
