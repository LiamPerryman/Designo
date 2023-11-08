import HomeBanner from "../components/HomeBanner";
import ProjectCta from "../components/ProjectCta";
import leaf from "../assets/shared/desktop/bg-pattern-leaf.svg";
import HomeArticle from "../components/HomeArticle";
function HomePage() {
  return (
    <div className="relative ">
      <img className="absolute  top-80 -left-40" src={leaf} alt="" />
      <HomeBanner />
      <ProjectCta />
      <HomeArticle />
    </div>
  );
}

export default HomePage;
