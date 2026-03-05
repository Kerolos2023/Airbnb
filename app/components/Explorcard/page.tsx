import { cardItem } from "@/types/app";
function Explorcard({img, price, rating} : cardItem) {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center">
        <img src={img} 
        alt="Explore card image" 
        className="w-16 h-16 rounded-lg object-cover" />
        <div className="ml-4">
          <h2 className="font-semibold">{price} $</h2>
          <p className="text-gray-500">{rating} *</p>
        </div>
      </div>
    </div>
  )
}

export default Explorcard