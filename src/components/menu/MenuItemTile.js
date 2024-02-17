import AddToCartButton from "@/components/menu/AddToCartButton";

export default function MenuItemTile({ onAddToCart, ...item }) {
  const { image, description, name, basePrice,
    sizes, extraIngredientPrices,
  } = item;
  const hasSizesOrExtras = sizes?.length > 0 || extraIngredientPrices?.length > 0;
  return (
    <div className="bg-gray-200 p-1 rounded-lg text-center
      group hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all"
      style={{ backgroundColor: '#d6ccc2', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <div className="text-center">
        <img src={image} className="rounded-t-lg rounded-b-md" alt=""/>
      </div>
      <h4 className="font-semibold text-xl my-3">{name}</h4>
      <p className="text-black text-sm line-clamp-3">
        {description}
      </p>
      <div style={{ marginTop: 'auto' }}>
        <AddToCartButton
          image={image}
          hasSizesOrExtras={hasSizesOrExtras}
          onClick={onAddToCart}
          basePrice={basePrice}
        />
      </div>
    </div>
  );
}