import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Import all your pages
import HealthForm from "./components/HealthForm";
import BlogPost from "./pages/BlogPost";
import HomePage from "./pages/HomePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RecommendationPage from "./pages/RecommendationPage";
import ReturnPolicy from "./pages/ReturnPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TalkToDoctor from "./pages/TalkToDoctor";
import TermsConditions from "./pages/TermsConditions";
import YoutubeVideos from "./pages/YoutubeVideos";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccess from "./pages/OrderSuccess";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F2]">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/talk-to-doctor" element={<TalkToDoctor />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/youtube-videos" element={<YoutubeVideos />} />
          <Route path="/health-form" element={<HealthForm />} />
          <Route path="/blog-post" element={<BlogPost />} />
          <Route path="/recommendations" element={<RecommendationPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
