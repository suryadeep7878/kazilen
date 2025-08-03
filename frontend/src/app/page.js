import BottomNav from "./components/BottomNav";
import CategoryTabs from "./components/CategoryTabs";
import RestaurantCard from "./components/RestaurantCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pb-16"> {/* Extra padding for bottom nav */}
      {/* Header is shown in layout.js conditionally */}

      <CategoryTabs />

      {/* Restaurant count */}
      <p className="px-4 mt-3 text-[11px] font-medium text-gray-400 tracking-wide uppercase">
        293 Professionals Delivering To You
      </p>

      {/* Restaurant Cards */}
      <RestaurantCard image="/Appliances repair professional shop.png" name="The Kathi Crossing" />
      <RestaurantCard image="/Appliances repair professional shop.png" name="The Kathi Crossing" />

      {/* BottomNav is already in layout.js too — remove this to avoid duplicate */}
      {/* <BottomNav /> */}
    </main>
  );
}
