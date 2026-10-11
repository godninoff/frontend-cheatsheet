import { CheatSheet } from "@/components/CheatSheet";
import { seedCategories } from "@/lib/seed";

const Home = () => {
  return <CheatSheet categories={seedCategories} />;
};

export default Home;
