import BackHeader from "./components/BackHeader";


export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      < BackHeader />

      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Your Profile</h1>
        <p className="text-gray-500 mt-2">This is your profile page.</p>
        {/* You can add logout, edit profile, etc. here */}
      </div>
    </div>
  )
}
