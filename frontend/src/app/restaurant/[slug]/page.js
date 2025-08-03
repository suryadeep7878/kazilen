export default function RestaurantDetail({ params }) {
  const { slug } = params

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize">
        {slug.replace(/-/g, ' ')}
      </h1>
      <p className="text-gray-600">This is the detail page for "{slug}".</p>
    </div>
  )
}
