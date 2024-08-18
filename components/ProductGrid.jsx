import { Suspense } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
			<Suspense fallback={<div>Loading...</div>}>
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</Suspense>
		</div>
	);
}
