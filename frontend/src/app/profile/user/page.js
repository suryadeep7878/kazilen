import BackHeader from "../components/BackHeader";


export default function UserProfileDetails() {
  return (
    <div className="min-h-screen bg-white">
      <BackHeader />
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">User Profile Details</h1>
        <p className="text-gray-500 mt-2">Here you can show user data like name, email, etc.</p>
      </div>
    </div>
  )
}
