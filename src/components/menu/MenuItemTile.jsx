import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export default function MenuItemTile({onAddToCart, ...item}) {
    const {image, description, name, basePrice,
      sizes, extraIngredientPrices,
    } = item;
    const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
    return (
      <div className="bg-gray-200 p-4 py-6 rounded-lg text-center
        group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="text-center">
          <Image src={image} width={280} height={280} className="max-h-64 block mx-auto" alt="pizza"/>
        </div>
        <h4 className="font-semibold text-xl my-3">{name}</h4>
        <p className="text-gray-500 text-sm min-h-16 line-clamp-3">
          {description}
        </p>
        <AddToCartButton
          hasSizesOrExtras={hasSizesOrExtras}
          onClick={onAddToCart}
          basePrice={basePrice}
        />
      </div>
    );
  }