import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Contact from "./pages/Contact";
import AboutMe from "./pages/About";
import Services from "./pages/Services";
import Experience from "./pages/Experience";
import Projects from "./components/Portfolio";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layout/Layout";
import RecipesList from "./components/RecipesList";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import RecipeDetail from "./components/RecipeDetail";
import NewUser from "./components/NewUser";
import NewUserDetail from "./components/NewUserDetail";
import Header from "./layout/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Header />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="services" element={<Services />} />
            <Route path="experience" element={<Experience />} />
            <Route path="portfolio" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="recipeslist" element={<RecipesList />} />
            <Route path="recipeslist/:recipeId" element={<RecipeDetail />} />
            <Route path="users" element={<User />} />
            <Route path="users/:userId" element={<UserDetails />} />
            <Route path="newusers" element={<NewUser />} />
            <Route path="newusers/:newId" element={<NewUserDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
