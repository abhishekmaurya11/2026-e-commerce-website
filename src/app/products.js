import ProductCard from "./productpiece";
export default function Products(){
    return (
        <div>
            <div className="text-center p-2 bg-blue-500">
                Our Products
            </div>
            <div className="grid grid-cols-3 grid-rows-2 p-4">
                <ProductCard  item= {'1'} price={5}/>
                <ProductCard item= {'2'} price={19} />
                <ProductCard item= {'3'} price={23} />
                <ProductCard item= {'4'} price={65} />
            </div>
        </div>
    );
}